export interface FlightProfile{
    accSectors?:string;
    aircraft ?:string;
    arrival?:string;
    arrivalTime?:string;
    callsign:string;
    departure?:string;
                departureFlag ?:number;
    deptTma?:string;
                  DestinationFlag?:number;
    destTma?:string;
    directDistance?:number;
    endRadian?:number
    FirstAchievedDistance ?:number;
    FirstActualDistance ?:number;

    firstEnrDistance?:number;
    firstEnrTime?:number;
    FirstEntAppDuration ?:number;

    firstEntLevel?:number;
    FirstEntRefRadian ?:number;

    firstEntTime?:string;
    firstEntX?:number;
    firstEntY?:number;
    firstExitLevel?:number;
    firstExitTime?:string;
    firstExitX?:number;
    firstExitY?:number;
    firstLevel?:number;
    FirstRefRadian ?:number;

    firstTime?:string;
    firstX?:number;
    firstY?:number;
    FlightplanId ?:number;

    flightType?:number;
    id:number;
    Kpi05A1 ?:number;
Kpi05A2 ?:number;
Kpi05B1 ?:number;
Kpi05B2 ?:number;

    lastLevel?:number;
    lastTime?:string;
    lastX?:number;
    lastY?:number;
    RunwayHeading ?:string;
    SecondAchievedDistance ?:number;
    SecondActualDistance ?:number;
    
    secondEnrDistance?:number;
    secondEnrTime?:number;
    SecondEntAppDuration ?:number;

    secondEntLevel?:number;
    SecondEntRefRadian ?:number;

    secondEntTime?:string;
    secondEntX?:number;
    secondEntY?:number;
    squawk:string;
    startRadian?:number;
    StateEntLevel ?:number;
StateEntX ?:number;
StateEntY ?:number;
StateExitLevel ?:number;
StateExitX ?:number;
StateExitY ?:number;
Tagname ?:string;
UnknownFlag ?:number;
waypoints ?:string;

}