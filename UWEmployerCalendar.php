<?php

	// File will be called employer.ics
	header('Content-Disposition: attachment; filename="employer.ics"');

	// Print the start of the calendar file
	echo "BEGIN:VCALENDAR\nPRODID:-//Google Inc//Google Calendar 70.9054//EN\nVERSION:2.0\nCALSCALE:GREGORIAN\nMETHOD:PUBLISH\nX-WR-CALNAME:EMPLOYER\nX-WR-TIMEZONE:America/Montreal\nX-WR-CALDESC:\n";
	
	// add the simple_htlm_dom.php to read html files easily
	require_once('simple_html_dom.php');
	
	for ($i=9;$i<=12;$i++)
	{
	// fetch html data from employer site
		$site = "http://www.ceca.uwaterloo.ca/students/sessions.php?month_num=".$i."&year_num=2013";
		$info = file_get_html($site);
		$data = null;

	// Fetch the table of employers in the file
		foreach ( $info->find('table') as $elem){
			$data = $elem->innertext;
			}
		
		$strdata = str_get_html($data);

		// Search for each different company
		foreach($strdata->find('a') as $element) 
		   {
		   // Avoid the first few a tags
			   if (isset($element->onmouseover))
					{
					$name = $element->innertext;
					$data =  $element->onmouseover;
					 
					preg_match('#<b>Date(.*?)Site:</b>#e',$data, $match);

					$emp = $match[0];
					
					$emp = str_replace("/", "", $emp);
					$emp = str_replace("<b>", "", $emp);
					$emp = str_replace("Date", "", $emp);
					$emp = str_replace("Time", "", $emp);
					$emp = str_replace("Location", "", $emp);
					$emp = str_replace("Web Site", "", $emp);
					$emp = str_replace(":","",$emp);
					$emp = str_replace(",","",$emp);
					
		
					list($date, $time, $location) = explode("<br>",$emp);
					list($blank,$month,$day,$year) = explode(" ",$date, 4);
					
					$month = checkMonth($month);
					$day = checkDay($day);
					list($start,$end) = checkTime($time);
					
					echo "BEGIN:VEVENT\n";
					echo "DTSTART:".$year.$month.$day."T".$start."00"."Z"."\n";
					echo "DTEND:".$year.$month.$day."T".$end."00"."Z"."\n";
					echo "DTSTAMP:20130925T170000Z\n"; 
					echo "CREATED:20130925T170000Z\n";
					echo "DESCRIPTION:\n";
					echo "LAST-MODIFIED:20130821T192023Z\n";
					echo "LOCATION:".$location."\n";
					echo "SEQUENCE:0\n";
					echo "STATUS:CONFIRMED\n";
					echo "SUMMARY:Info Session: ".$name."\n";
					echo "TRANSP:OPAQUE\n";
					echo "END:VEVENT\n";
				}
		   }
	}   
	echo "END:VCALENDAR";
	
	function checkMonth($i)
	{
		switch($i)
		{
			case 'January':
				return '01';
			case 'February':
				return '02';
			case 'March':
				return '03';
			case 'April':
				return '04';
			case 'May':
				return '05';
			case 'June':
				return '06';
			case 'July':
				return '07';
			case 'August':
				return '08';
			case 'September':
				return '09';
			case 'October':
				return '10';
			case 'November':
				return '11';
			case 'December':
				return '12';
		}
	}
	
	function checkDay($i)
	{
		if (intval($i)<10)
			return '0'.$i;
		return $i;
	}
	
	function checkTime($i)
	{
		list($blank, $start, $AMPM1, $hyphen, $end,$AMPM2) = explode(" ",$i);
		if ($AMPM1 == 'PM')
		{
			$temp = 1200+intval($start);
			$start = strval($temp);
		}
		
		if ($AMPM2 == 'PM')
		{
			$temp = 1200 + intval($end);
			$end = strval($temp);
		}
		return array($start,$end);
	}
?>