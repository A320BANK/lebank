const questions = [
  {
    "question": "If engine anti-ice is planned to be used during takeoff, until reaching which altitude should it be considered to be ON?",
    "answers": [
      "MSA",
      "ACC",
      "EOACC",
      "THRRED"
    ],
    "correct": 2,
    "category": "Performance"
  },
  {
    "question": "A 'contaminated runway' describes a surface where a certain percentage of the runway is covered by what depth of contaminant?",
    "answers": [
      "More than 1 mm",
      "More than 3 mm",
      "More than 7 mm",
      "More than 5 mm"
    ],
    "correct": 1,
    "category": "Performance"
  },
  {
    "question": "After a landing performance calculation. Flysmart generates amber figures in the computations area. What does this mean?",
    "answers": [
      "Single engine performance is not available",
      "Autoland not available",
      "Factored landing distance exceeds available landing distance",
      "Calculated stop point within 300 m of runway end"
    ],
    "correct": 2,
    "category": "Performance"
  },
  {
    "question": "Which of the following is NOT an SOP while taking off on a contaminated runway?",
    "answers": [
      "TOGA thrust to be used",
      "CM1 to be PF",
      "Normal takeoff technique to be used",
      "CONF 1 +F must be used for takeoff"
    ],
    "correct": 3,
    "category": "Performance"
  },
  {
    "question": "On an EFB PERF page, where can the ISA value be located (to calculate TREF for example)?",
    "answers": [
      "Must be calculated manually",
      "Next to OAT",
      "Next to computed flex temperature",
      "MORE <F10>"
    ],
    "correct": 1,
    "category": "Performance"
  },
  {
    "question": "What is the screen height for a wet runway?",
    "answers": [
      "10 ft",
      "30 ft",
      "15 ft",
      "25 ft"
    ],
    "correct": 2,
    "category": "Performance"
  },
  {
    "question": "What is the screen height for a dry runway?",
    "answers": [
      "10 ft",
      "30 ft",
      "15 ft",
      "35 ft"
    ],
    "correct": 3,
    "category": "Performance"
  },
  {
    "question": "In the event of an LMC of 200 kg, what is the appropriate response?",
    "answers": [
      "Subtract one degree from flex",
      "No correction available. Recalculate speeds and flex.",
      "Initial calculations cover this change. No action required.",
      "Perform a rolling takeoff"
    ],
    "correct": 0,
    "category": "Performance"
  },
  {
    "question": "In the event of a last-minute decision to use engine anti-ice, what correction must be applied?",
    "answers": [
      "No correction available. Recalculate speeds and flex.",
      "Subtract five degrees from flex",
      "Initial calculations cover this change. No action required.",
      "Increase thrust reduction altitude by 500 ft"
    ],
    "correct": 1,
    "category": "Performance"
  },
  {
    "question": "In the event of a QNH reduction by 1 hPa on taxi-out, what correction must be applied?",
    "answers": [
      "Increase thrust reduction altitude by 500 ft",
      "Initial calculations cover this change. No action required.",
      "Subtract one degree from flex",
      "No correction available. Recalculate speeds and flex."
    ],
    "correct": 2,
    "category": "Performance"
  },
  {
    "question": "In the event of a QNH reduction by 2 hPa on taxi-out, what correction must be applied?",
    "answers": [
      "No correction available. Recalculate speeds and flex.",
      "Initial calculations cover this change. No action required.",
      "Subtract one degree from flex",
      "Subtract two degrees from flex"
    ],
    "correct": 2,
    "category": "Performance"
  },
  {
    "question": "In the event of a QNH reduction by 2 hPa on taxi-out what correction must be applied?",
    "answers": [
      "No correction available. Recalculate speeds and flex.",
      "Initial calculations cover this change. No action required.",
      "Subtract one degree from flex",
      "Subtract two degrees from flex"
    ],
    "correct": 2,
    "category": "Performance"
  },
  {
    "question": "In the event of a QNH reduction by 3 hPa on taxi-out, what correction must be applied?",
    "answers": [
      "Subtract two degrees from flex",
      "Initial calculations cover this change. No action required.",
      "No correction available. Recalculate speeds and flex.",
      "Subtract one degree from flex"
    ],
    "correct": 0,
    "category": "Performance"
  },
  {
    "question": "In the event of a last minute decision to use engine bleed to supply packs, what correction must be applied?",
    "answers": [
      "Subtract two degrees from flex",
      "No correction available. Recalculate speeds and flex.",
      "Initial calculations cover this change. No action required.",
      "Subtract one degree from flex"
    ],
    "correct": 1,
    "category": "Performance"
  },
  {
    "question": "Where is the correct place to find RWY COND EFB entry for takeoff?",
    "answers": [
      "QRH",
      "OM-B",
      "OM-A",
      "EFB MORE app"
    ],
    "correct": 3,
    "category": "Performance"
  },
  {
    "question": "Where is the correct place to find RWY COND EFB entry in flight for landing?",
    "answers": [
      "OM-A",
      "QRH",
      "EFB MORE app",
      "OM-B"
    ],
    "correct": 1,
    "category": "Performance"
  },
  {
    "question": "Under which conditions must engine anti-ice be used?",
    "answers": [
      "With rain falling",
      "OAT 0Â°C or below and visible moisture",
      "OAT 5Â°C or below and visible moisture",
      "OAT 10Â°C or below and visible moisture"
    ],
    "correct": 3,
    "category": "Performance"
  },
  {
    "question": "What is considered to be a 'forward' CG at takeoff?",
    "answers": [
      "less than 27%",
      "less than or equal to 27%",
      "less than 30%",
      "less than or equal to 30%"
    ],
    "correct": 0,
    "category": "Performance"
  },
  {
    "question": "What is considered to be a 'standard' CG at takeoff?",
    "answers": [
      "More than 27%",
      "More than or equal to 27%",
      "More than 30%",
      "More than or equal to 30%"
    ],
    "correct": 1,
    "category": "Performance"
  },
  {
    "question": "Which of these statements is NOT true regarding a CONF 1 +F takeoff instead of other configurations?",
    "answers": [
      "Takeoff run is longer",
      "It produces the best climb gradient",
      "Climb gradient is reduced"
    ],
    "correct": 2,
    "category": "Performance"
  },
  {
    "question": "OPT CONF selection for takeoff ensures what?",
    "answers": [
      "Always produces CONF 3 takeoff",
      "The best MTOW is calculated",
      "That the highest V1 is always used"
    ],
    "correct": 1,
    "category": "Performance"
  },
  {
    "question": "When is a rolling takeoff not permitted due to performance?",
    "answers": [
      "A TOGA takeoff",
      "A TOGA takeoff with a RWY or OBS limit code",
      "When RWY or OBS is the performance limit code",
      "Flex falls below TREF"
    ],
    "correct": 1,
    "category": "Performance"
  },
  {
    "question": "If departing from an intersection with a longer TORA than planned, what is required?",
    "answers": [
      "Recalculation of takeoff performance",
      "TOGA takeoff performed",
      "No action required",
      "Derate removed"
    ],
    "correct": 2,
    "category": "Performance"
  },
  {
    "question": "If following an EOSID, what obstacle clearance is guaranteed?",
    "answers": [
      "None",
      "Above 1,500 ft, a radius of 30 NM is surveyed for limiting obstacles",
      "Above 1,000 ft, a radius of 20 NM is surveyed for limiting obstacles",
      "As per MSA only"
    ],
    "correct": 1,
    "category": "Performance"
  },
  {
    "question": "How can the maximum acceleration altitude be found on the EFB TO PERF page?",
    "answers": [
      "By tapping on the flex temperature",
      "Must be manually calculated using FCOM",
      "Adding 4,000 ft to acceleration altitudes calculated",
      "MORE <F10>"
    ],
    "correct": 3,
    "category": "Performance"
  },
  {
    "question": "On the EFB, how can MEL items be added to assure performance requirements are met?",
    "answers": [
      "ACFT STS <FS>",
      "Must be manually calculated using FCOM",
      "By tapping on the flex temperature",
      "MORE <F10>"
    ],
    "correct": 0,
    "category": "Performance"
  },
  {
    "question": "For an in-flight landing calculation, what is the maximum crosswind with compacted snow at -16Â°C?",
    "answers": [
      "15 kts",
      "10 kts",
      "38 kts",
      "29 kts"
    ],
    "correct": 3,
    "category": "Performance"
  },
  {
    "question": "For an in-flight landing calculation, what is the maximum crosswind with 5 mm of water?",
    "answers": [
      "20 kts",
      "10 kts",
      "15 kts",
      "29 kts"
    ],
    "correct": 0,
    "category": "Performance"
  },
  {
    "question": "For an in-flight landing calculation, what is the maximum crosswind with compacted snow at -13Â°C?",
    "answers": [
      "29 kts",
      "25 kts",
      "38 kts",
      "10 kts"
    ],
    "correct": 1,
    "category": "Performance"
  },
  {
    "question": "For an in-flight landing calculation, what is the appropriate EFB input for RWY COND with 'Wet' runway?",
    "answers": [
      "6-Dry",
      "4-Good to Medium",
      "5-Good",
      "3-Medium"
    ],
    "correct": 2,
    "category": "Performance"
  },
  {
    "question": "For an in-flight landing calculation, what is the appropriate EFB input for RWY COND with 5 mm of water on the runway?",
    "answers": [
      "6-Dry",
      "2-Medium to Poor",
      "5-Good",
      "3-Medium"
    ],
    "correct": 1,
    "category": "Performance"
  },
  {
    "question": "On the EFB, how can the GA gradient be modified to ensure compliance?",
    "answers": [
      "MODIFY RWY",
      "ACFT STS <FS>",
      "MORE <F10>",
      "Adding Vpilot"
    ],
    "correct": 0,
    "category": "Performance"
  },
  {
    "question": "If using Reverse Idle, what is the correct choice in the EFB LOG PERF?",
    "answers": [
      "Yes",
      "No",
      "Properties"
    ],
    "correct": 1,
    "category": "Performance"
  },
  {
    "question": "In EFB LOG PERF, how do we correctly adjust for a NOTAMed shortening of a runway?",
    "answers": [
      "Adding Vpilot",
      "ACFT STS <FS>",
      "MORE <F10>",
      "FUNCTIONS>MODIFY RWY"
    ],
    "correct": 3,
    "category": "Performance"
  },
  {
    "question": "What are the standard second and final segment gross climb gradients on takeoff?",
    "answers": [
      "2.4%/4.8%",
      "2.4%/1.2%",
      "1%/2.2%"
    ],
    "correct": 1,
    "category": "Performance"
  },
  {
    "question": "What is the correct runway condition in EFB PERF for takeoff if the runway is damp?",
    "answers": [
      "Dry",
      "Wet",
      "Neither dry nor wet"
    ],
    "correct": 2,
    "category": "Performance"
  },
  {
    "question": "What takeoff performance limit codes indicate performance limiting takeoff when using TOGA thrust?",
    "answers": [
      "RWY and OBS",
      "RWY only",
      "OBS only",
      "RWY, OBS, and VMC"
    ],
    "correct": 1,
    "category": "Performance"
  },
  {
    "question": "Required landing distance figures include what factors for a 'dry'/'wet' runway?",
    "answers": [
      "1.25/1.5",
      "1.5/2.0",
      "1.67/1.92"
    ],
    "correct": 2,
    "category": "Performance"
  },
  {
    "question": "If a runway is wet and NOTAMed 'slippery when wet', what is the correct EFB TO PERF input for RWY COND?",
    "answers": [
      "WATER 1/2",
      "ICY",
      "WET",
      "DRY"
    ],
    "correct": 0,
    "category": "Performance"
  },
  {
    "question": "If below 10Â°C and 'wet' runway only, is anti-ice legally required for take-off?",
    "answers": [
      "Yes",
      "No",
      "Properties"
    ],
    "correct": 1,
    "category": "Performance"
  },
  {
    "question": "How many 'negligible' COL items can be carried without applying a performance penalty?",
    "answers": [
      "3",
      "2",
      "1",
      "4"
    ],
    "correct": 0,
    "category": "Performance"
  },
  {
    "question": "What is Vpilot?",
    "answers": [
      "Added margin for manual landing",
      "Pilot added adjustment to APPR COR",
      "Properties"
    ],
    "correct": 1,
    "category": "Performance"
  },
  {
    "question": "At landing, what is included in EFB calculations but NOT in QRH calculations?",
    "answers": [
      "A 1.67 factor on landing distance",
      "A 1.15 factor on landing distance",
      "A 1.3 factor on landing distance"
    ],
    "correct": 1,
    "category": "Performance"
  },
  {
    "question": "What is the standard operating procedure for the EOSID stop altitude?",
    "answers": [
      "MSA",
      "MHA",
      "No procedure specified",
      "SID stop altitude"
    ],
    "correct": 2,
    "category": "Performance"
  },
  {
    "question": "What is an indicator that 'stop margin' figures have additional factors added?",
    "answers": [
      "A high flex figure",
      "TOGA takeoff",
      "If all V speeds are the same"
    ],
    "correct": 0,
    "category": "Performance"
  },
  {
    "question": "Where is the correct place to find RWY COND EFB entry at landing dispatch?",
    "answers": [
      "EFB MORE app",
      "OM-A",
      "QRH",
      "OM-B"
    ],
    "correct": 0,
    "category": "Performance"
  },
  {
    "question": "Which of these is not an appropriate wind entry for a METAR reading VRB03KT?",
    "answers": [
      "T03",
      "TL03",
      "H03",
      "0/0"
    ],
    "correct": 2,
    "category": "Performance"
  },
  {
    "question": "What is the TREF value for an Airbus A320-214?",
    "answers": [
      "ISA+29",
      "ISA+15",
      "ISA",
      "ISA+25"
    ],
    "correct": 0,
    "category": "Performance"
  },
  {
    "question": "A 'contaminated runway' describes a surface where a certain depth of contaminant is covering what percentage of runway area?",
    "answers": [
      "More than 25%",
      "More than 50%",
      "25% or more",
      "50% or more"
    ],
    "correct": 0,
    "category": "Performance"
  },
  {
    "question": "Which is true regarding the EMERGENCY pressure selector?",
    "answers": [
      "It delivers 100% oxygen to the mask when pushed",
      "Turning the knob generates a permanent overpressure, only when N/100% selector is set on the N position",
      "Turning the knob generates a permanent overpressure, only when N/100% selector is set on the 100% position",
      "Pressing the knob generates a permanent overpressure"
    ],
    "correct": 2,
    "category": "Air systems"
  },
  {
    "question": "What is the effect of pressing the RESET control slide, after the oxygen mask has been used?",
    "answers": [
      "No effect",
      "It cuts off the oxygen only",
      "It cuts off the oxygen and the mask microphone",
      "It only cuts off the mask microphone"
    ],
    "correct": 2,
    "category": "Air systems"
  },
  {
    "question": "Under normal operations, maximum reverse should not be used below what speed?",
    "answers": [
      "50 kt",
      "60 kt",
      "70 kt",
      "75 kt"
    ],
    "correct": 2,
    "category": "Limitations"
  },
  {
    "question": "Which of the following correctly completes this statement? \"The pressurization system includes ...",
    "answers": [
      "... 2 Cabin Pressure Controllers; 1 Outflow Valve with 2 auto motors and 1 manual motor.",
      "... 2 Cabin Pressure Controllers; 1 Outflow Valve with 1 auto motor and 1 manual motor.",
      "... 3 Cabin Pressure Controllers; 2 Outflow Valves with 2 auto motors and 1 manual motor.",
      "... 3 Cabin Pressure Controllers; 1 Outflow Valve with 1 auto motor and 2 manual motors."
    ],
    "correct": 0,
    "category": "Air systems"
  },
  {
    "question": "What is the maximum speed for speedbrakes use?",
    "answers": [
      "Mmo/Vmo",
      ".86/350 kt",
      "There is no limitation",
      "250 kt in clean configuration"
    ],
    "correct": 2,
    "category": "Limitations"
  },
  {
    "question": "When does the lavatory/galley extract fan operate?",
    "answers": [
      "Only in flight",
      "Only on the ground",
      "Continuously with electrical power",
      "Only with galley power applied"
    ],
    "correct": 2,
    "category": "Air systems"
  },
  {
    "question": "In the event of electrical power supply loss ...",
    "answers": [
      "The engine anti ice valves will open automatically, anti icing is assured",
      "The engine anti ice valves will close automatically, anti icing is lost",
      "The engine anti ice valves will be controlled by the wing ANTI ICE controls",
      "The engine anti ice valves remain in the position they were at"
    ],
    "correct": 0,
    "category": "Electrical"
  },
  {
    "question": "When is HYD PRESS 3,000 +/- 200 PSI?",
    "answers": [
      "Under Normal Conditions and when the RAT is providing system pressure",
      "Under Normal Conditions",
      "No HYD PRESS is required on single engine operation",
      "No HYD PRESS is required for normal operation"
    ],
    "correct": 1,
    "category": "Hydraulics"
  },
  {
    "question": "Maximum tire ground speed is?",
    "answers": [
      "195 kt",
      "200 kt",
      "205 kt",
      "185 kt"
    ],
    "correct": 0,
    "category": "Limitations"
  },
  {
    "question": "The aural alerts of the Predictive Windshear System (PWS) ...",
    "answers": [
      "Have priority over TCAS, GPWS and other FWC aural warnings",
      "Only have priority over TCAS warnings",
      "Only have priority over GPWS warnings",
      "Never have priority over TCAS and GPWS aural warnings"
    ],
    "correct": 0,
    "category": "Indicating/recording systems"
  },
  {
    "question": "What is the maximum speed for operating the windshield wipers?",
    "answers": [
      "185 kt",
      "200 kt",
      "215 kt",
      "230 kt"
    ],
    "correct": 3,
    "category": "Limitations"
  },
  {
    "question": "Minimum oil temperature for start is?",
    "answers": [
      "-10Â°C",
      "-40Â°C",
      "There is no limitation",
      "in the green on SD page"
    ],
    "correct": 1,
    "category": "Engine"
  },
  {
    "question": "What does the NW STRG DISC memo on the E/WD indicate?",
    "answers": [
      "The nose wheel steering has been disconnected by ground personnel",
      "A failure in the nose wheel steering system has been detected",
      "There is a discrepancy between the two nose wheel steering hand wheel positions",
      "The nose wheel steering computer has finished its self-test. Nose wheel steering is now available"
    ],
    "correct": 0,
    "category": "Landing gear"
  },
  {
    "question": "The AC ESS BUS is normally supplied by:",
    "answers": [
      "AC BUS 2",
      "AC BUS 1",
      "Emergency Generator",
      "APU via a static inverter"
    ],
    "correct": 1,
    "category": "Electrical"
  },
  {
    "question": "The APU has been switched off, but it has not stopped. Which of the following would cause this?",
    "answers": [
      "The APU fuel pump continuing to run.",
      "The air intake flap failing to close.",
      "A cooling period (following use of APU bleed).",
      "A cooling period, which occurs on all APU shutdowns."
    ],
    "correct": 2,
    "category": "APU"
  },
  {
    "question": "What is the normal operating pressure in the hydraulic system?",
    "answers": [
      "500 psi",
      "1000 psi",
      "2000 psi",
      "3000 psi"
    ],
    "correct": 3,
    "category": "Hydraulics"
  },
  {
    "question": "What is the maximum runway pressure altitude for takeoff and landing",
    "answers": [
      "10,000 ft",
      "9200 ft",
      "Dependent on outside air temperature",
      "There is no restriction"
    ],
    "correct": 1,
    "category": "Performance"
  },
  {
    "question": "What indication occurs during a pushback (including engine start), with the steering selector in the TOWING position?",
    "answers": [
      "A caution NW STRG FAULT will appear on the E/WD.",
      "A memo NW STRG DISC appears in green until the steering selector is returned to NORMAL.",
      "A memo NW STRG DISC appears in amber if at least one engine is running.",
      "STRG is displayed (in amber) on the Wheels S.D."
    ],
    "correct": 2,
    "category": "Landing gear"
  },
  {
    "question": "What is the maximum runway slope?",
    "answers": [
      "+/- 1%",
      "+ 1%/ -2%",
      "+\\- 2%",
      "+2%/ -1%"
    ],
    "correct": 2,
    "category": "Limitations"
  },
  {
    "question": "During your preliminary cockpit preparation you notice that the FLAPS lever is in the ZERO position but the E/WD shows the FLAPS extended. What should you do?",
    "answers": [
      "You must move the FLAPS to the position corresponding to the position shown on the SD",
      "Nothing. The FLAPS will move to the position selected as soon as all the engines are started",
      "Switch ON the YELLOW electric HYD pump and recycle the FLAPS lever",
      "You must check with the maintenance crew before applying hydraulic power"
    ],
    "correct": 3,
    "category": "Flight controls"
  },
  {
    "question": "Navaids are normally autotuned by?",
    "answers": [
      "ADIRU",
      "RMP",
      "MCDU",
      "FMGC"
    ],
    "correct": 3,
    "category": "Navigation"
  },
  {
    "question": "With the AUDIO SWITCHING knob in the CAPT 3 position:",
    "answers": [
      "The Captain uses his acoustic equipment on ACP 3",
      "The captain should use the 3rd occupant (observer) headset",
      "The AUDIO SWITCHING knob must be placed in ALTN position",
      "The AUDIO SWITCHING knob should be placed in STBY position"
    ],
    "correct": 0,
    "category": "Indicating/recording systems"
  },
  {
    "question": "When does the F/CTL page appear on the flight deck during the flight control check?",
    "answers": [
      "Automatically as soon as the nose wheel steering handle is moved",
      "Automatically as soon as the side stick is moved",
      "The pilot has to press the F/CTL pb on the ECP",
      "You can't see the page. The system is inoperative on ground"
    ],
    "correct": 1,
    "category": "Flight controls"
  },
  {
    "question": "In ALTERNATE LAW, how do the indications change at the bottom of the speed scale?",
    "answers": [
      "Alpha protection is replaced by an extended VLS.",
      "There are no changes: it is possible to stall the aircraft.",
      "VLS is replaced by VSTALL WARNING.",
      "Alpha protection is replaced by VSTALL WARNING: it is possible to stall the aircraft."
    ],
    "correct": 3,
    "category": "Flight controls"
  },
  {
    "question": "What is the maximum speed for flight with a cockpit window open?",
    "answers": [
      "200 knots",
      "230 knots",
      "Green Dot",
      "250 knots"
    ],
    "correct": 0,
    "category": "Limitations"
  },
  {
    "question": "After take-off the A/THR will not become active until...",
    "answers": [
      "The autopilot is engaged",
      "The thrust levers are moved out of the TOGA or FLEX/MCT detents",
      "The thrust levers are retarded into the CLIMB detent from TOGA or FLEX/MCT and A/THR is displayed white in the FMA",
      "The A/THR pb is manually selected ON"
    ],
    "correct": 2,
    "category": "Auto flight"
  },
  {
    "question": "The Emergency Generator will power which busses?",
    "answers": [
      "AC Bus 1 and AC Bus 2",
      "AC ESS & DC ESS buses",
      "AC Bus 1 and DC Bus 1",
      "AC ESS and TR 1"
    ],
    "correct": 1,
    "category": "Electrical"
  },
  {
    "question": "If both pilots simultaneously deflect their side sticks fully back ...",
    "answers": [
      "No inputs are sent to the flight control computers unless one pilot presses the take over pb on his stick",
      "The pitch up order is algebraically computed. The total is limited to the signal that would result in the max deflection of a single sidestick",
      "The pitch up order is 1.5 times higher than with only one stick deflected",
      "The pitch up order is twice as high as with only one stick deflected"
    ],
    "correct": 1,
    "category": "Flight controls"
  },
  {
    "question": "Which of the following correctly completes this statement? \"Provided not on batteries only, the APU may be started ...",
    "answers": [
      "... at or below 35,000 feet only.",
      "... at or below 25,000 feet only.",
      "... at or below 300 kts only",
      "... throughout the normal flight envelope."
    ],
    "correct": 3,
    "category": "APU"
  },
  {
    "question": "Following a Wing Anti-Ice (WAI) test on the ground, what happens if the WAI switch is left ON?",
    "answers": [
      "The Anti-Ice Valves will close after 10 seconds (on the S.D., the triangles go amber).",
      "WAI will automatically activate on selection of TOGA power.",
      "If WAI is subsequently required in flight, it is necessary to select the Anti-Ice Switch OFF then ON again.",
      "After a 30 second test sequence, the wing anti-Ice valves close."
    ],
    "correct": 3,
    "category": "Ice and rain protection"
  },
  {
    "question": "When is the engine fire extinguishing squib armed?",
    "answers": [
      "When both loops fail within 5 seconds of each other",
      "When the ENG FIRE pushbutton is pushed and released",
      "When the ENG FIRE pushbutton is illuminated",
      "when the agent DISCH light is illuminated"
    ],
    "correct": 1,
    "category": "Fire protection"
  },
  {
    "question": "Which of the following is true about the FADEC system?",
    "answers": [
      "It is continuously powered from the moment the aircraft receives AC power.",
      "It is a dual channel unit that has its own internal power source",
      "It is not available until the engine MODE SEL is set to IGN/START.",
      "It is self-powered above 5% N1."
    ],
    "correct": 1,
    "category": "Engine"
  },
  {
    "question": "What is the maximum demonstrated crosswind for landing (including gusts)?",
    "answers": [
      "29 knots",
      "33 knots",
      "35 knots",
      "38 knots"
    ],
    "correct": 3,
    "category": "Limitations"
  },
  {
    "question": "The FIRE light on the pedestal illuminates, what does this indicate?",
    "answers": [
      "The FIRE Light, when illuminated, identifies the engine to be shut down because of fire.",
      "The FIRE Light, when illuminated, indicates a faulty loop and maintenance action is required.",
      "The FIRE Light, when illuminated, indicates empty fire bottles.",
      "The FIRE Light, when illuminated, indicates to the crew they forgot the fire test prior to departure."
    ],
    "correct": 0,
    "category": "Fire protection"
  },
  {
    "question": "What is the certified maximum number of passenger seats for an A320?",
    "answers": [
      "189",
      "180",
      "144",
      "215"
    ],
    "correct": 1,
    "category": "Limitations"
  },
  {
    "question": "What happens to the cabin lights in the event of excessive cabin altitude?",
    "answers": [
      "The NO SMOKING, FASTEN SEAT BELT, RETURN TO SEAT and EXIT signs come on automatically only if the switches are in the AUTO position",
      "The NO SMOKING, FASTEN SEAT BELT, RETURN TO SEAT and EXIT signs come on automatically only if the EMER EXIT switch is ARMED",
      "The NO SMOKING, FASTEN SEAT BELT, RETURN TO SEAT and EXIT signs come on automatically only if the landing gear is down",
      "The NO SMOKING, FASTEN SEAT BELT, RETURN TO SEAT and EXIT signs come on automatically regardless of the position of the switches"
    ],
    "correct": 3,
    "category": "Air systems"
  },
  {
    "question": "What are the thrust settings you can take off with?",
    "answers": [
      "Any manual setting",
      "FLEX or MCT",
      "CLIMB or TOGA",
      "FLEX or TOGA"
    ],
    "correct": 3,
    "category": "Engine"
  },
  {
    "question": "Following an overheat and shut down of a hydraulic pump, how long will the FAULT light on the overhead panel remain illuminated?",
    "answers": [
      "It will extinguish when the fluid has cooled to normal temperature.",
      "It will remain illuminated until maintenance action has been taken.",
      "It will extinguish when the switch is placed to OFF.",
      "It is inhibited with engines running."
    ],
    "correct": 0,
    "category": "Hydraulics"
  },
  {
    "question": "What information is given at the top right of the Nav Display in the ARC mode?",
    "answers": [
      "Raw Data from a tuned VOR.",
      "Computed data concerning the TO Waypoint.",
      "Range marks for the inner circle.",
      "Track and Groundspeed."
    ],
    "correct": 1,
    "category": "Navigation"
  },
  {
    "question": "What happens if the BUS TIE pb is set to AUTO position?",
    "answers": [
      "Both bus tie contactors open",
      "It has no effect on the AC electrical system",
      "The bus tie contactors (BTCs) automatically open or close to maintain power supply to both AC BUS 1 and 2",
      "AC BUS 1 and 2 will work in parallel with both generators as suppliers"
    ],
    "correct": 2,
    "category": "Electrical"
  },
  {
    "question": "On the Speed Tape on the PFD, what does the \"F\" speed represent at take-off?",
    "answers": [
      "Minimum speed to retract flaps from FLAP 3 to FLAP 1.",
      "Minimum speed to retract flaps from FLAP FULL to FLAP 3.",
      "Minimum speed for present flap setting.",
      "Maximum speed for selecting one more stage of flaps."
    ],
    "correct": 0,
    "category": "Limitations"
  },
  {
    "question": "The FLEX temperature must not be lower than the actual OAT.",
    "answers": [
      "True",
      "False",
      "Must be higher than Tmax and TFLEXmax",
      "Must be higher than TFLEXmax"
    ],
    "correct": 0,
    "category": "Performance"
  },
  {
    "question": "The engine ANTI ICE system ...",
    "answers": [
      "Operates only in flight and is fully automatic in case of icing conditions",
      "Cannot be operated on ground to prevent damaging the slats",
      "When selected ON, causes idle N1 (or idle EPR) to be reduced",
      "Is controlled manually by the pilot through the ENG 1 and ENG 2 ANTI ICE pushbuttons"
    ],
    "correct": 3,
    "category": "Ice and rain protection"
  },
  {
    "question": "In what case are the batteries connected to the DC BAT BUS?",
    "answers": [
      "On the ground with loss of AC BUS 1 and 2 when speed is above 140 kt",
      "On the ground with loss of AC BUS 1 and 2 when speed is below 100 kt",
      "Whenever the BAT switches are set to AUTO",
      "When battery voltage is above 27.5 V"
    ],
    "correct": 1,
    "category": "Electrical"
  },
  {
    "question": "When is selection of reverse thrust in flight allowed?",
    "answers": [
      "It is permitted below WX minima on WET RWY",
      "It is prohibited",
      "It is recommended on short runways",
      "It is allowed above Vmca"
    ],
    "correct": 1,
    "category": "Engine"
  },
  {
    "question": "What will be the result if, after selecting FLAPS 2 in flight, asymmetric flap travel occurs?",
    "answers": [
      "The flaps and slats will be locked in position until maintenance action.",
      "The flaps will be locked in position by the Wing Tip Brake.",
      "The flaps will run to the selected position, and then be locked by the Wing Tip Brake.",
      "The Pressure Off Brakes will be applied to prevent further flap movement."
    ],
    "correct": 1,
    "category": "Flight controls"
  },
  {
    "question": "What are the pitch and roll limits in Normal Law Configuration 0?",
    "answers": [
      "Pitch: +30Â° (+25Â° at low speed), -15Â°, Roll: 67Â°.",
      "Pitch: +30Â° (+25Â° at low speed), -10Â°, Roll: 67Â°.",
      "Pitch: +25Â° (+20Â° at low speed), -15Â°, Roll: 67Â°.",
      "Pitch: +30Â°, Roll: 45Â°."
    ],
    "correct": 0,
    "category": "Flight controls"
  },
  {
    "question": "With the aircraft on the ground, which of the following is true with regard to the gear lever?",
    "answers": [
      "It can be selected up but retraction is inhibited by the shock absorber being compressed.",
      "It cannot be moved due to an interlock with shock absorber compression.",
      "It can be selected up by operating the override trigger.",
      "It cannot be moved if the Green hydraulic system is pressurized."
    ],
    "correct": 1,
    "category": "Landing gear"
  },
  {
    "question": "What is the effect of selecting the GEN 1 LINE switch to OFF on the EMER ELEC PWR panel?",
    "answers": [
      "Fuel pump operation is transferred to AC ESS BUS.",
      "GEN 1 is fed directly onto the AC ESS BUS.",
      "GEN 1 is de-energized.",
      "GEN 1 line contactor opens."
    ],
    "correct": 3,
    "category": "Electrical"
  },
  {
    "question": "The STROBE lights selector is set to AUTO. In this position when do they stop flashing?",
    "answers": [
      "When the aircraft touches down",
      "When the first reverser is opened",
      "When the landing lights are switched off",
      "When the last engine has been shut down"
    ],
    "correct": 0,
    "category": "Landing gear"
  },
  {
    "question": "What is maximum altitude that the landing gear may be extended?",
    "answers": [
      "10,000 ft",
      "25,000 ft",
      "At aircraft maximum operating altitude.",
      "2,500 ft"
    ],
    "correct": 1,
    "category": "Landing gear"
  },
  {
    "question": "What are the maximum acceleration (G) limits?",
    "answers": [
      "Slats extended and flaps retracted, 0 g to +2 g",
      "Slats and flaps extended, 0 g to +2.5 g",
      "Clean -1 g to +2.5 g, flaps extended -1 g to +2 g",
      "Clean -1 g to +2.5 g, slats extended -1 g to +2.5 g"
    ],
    "correct": 0,
    "category": "Flight controls"
  },
  {
    "question": "When the gear is retracted, which exterior lights extinguish automatically?",
    "answers": [
      "NOSE and RWY TURN OFF",
      "RWY TURN OFF and WING",
      "NOSE and LAND",
      "LOGO and LAND"
    ],
    "correct": 0,
    "category": "Landing gear"
  },
  {
    "question": "You are performing a takeoff with the thrust levers in the FLEX position. Which of the following statements is true?",
    "answers": [
      "A/THR is now active",
      "A/THR is now armed",
      "A/THR is off until the A/THR pb is pressed",
      "A/THR is now in yellow"
    ],
    "correct": 1,
    "category": "Auto flight"
  },
  {
    "question": "When on an intercept heading, to join an ILS localizer, the Flight Path Vector (FPV) will be lined up with the ...",
    "answers": [
      "... glideslope demand.",
      "... ILS inbound course.",
      "... actual aircraft heading.",
      "... actual aircraft track."
    ],
    "correct": 3,
    "category": "Auto flight"
  },
  {
    "question": "In case of RMP1 failure ...",
    "answers": [
      "RMP1 no longer controls the selected receiver and should be switched OFF",
      "RMP1 no longer controls the selected receiver and should be switched OFF, tune VHF1 through another RMP",
      "The frequency display will turn amber and the green VHF (or HF) lights will remain illuminated",
      "RMP3 can be used provided it is not connected to ACARS"
    ],
    "correct": 1,
    "category": "Communications"
  },
  {
    "question": "What is maximum operating altitude with slats and/or flaps extended?",
    "answers": [
      "No restrictions apply.",
      "10,000 ft.",
      "15,000 ft.",
      "20,000 ft."
    ],
    "correct": 3,
    "category": "Limitations"
  },
  {
    "question": "What does the left (captain's) ND show when selected to ROSE ILS?",
    "answers": [
      "ILS receiver No. 1 or No. 2 signals, as selected.",
      "ILS receiver No. 1 signals only.",
      "ILS receiver No. 2 signals only.",
      "ILS receiver No. 2 signals and the map."
    ],
    "correct": 2,
    "category": "Navigation"
  },
  {
    "question": "What does a red UNLK light indicate on the Landing Gear Indicator Panel?",
    "answers": [
      "LGCIU 1 and 2 failure.",
      "Associated gear door is not locked closed.",
      "Associated gear is in transit.",
      "Associated gear is not locked in selected position."
    ],
    "correct": 3,
    "category": "Landing gear"
  },
  {
    "question": "You are about to perform a takeoff. You have not inserted a FLEX temperature. Can you still take-off?",
    "answers": [
      "Not until a FLEX temperature is inserted.",
      "Yes, by setting the thrust levers to the CLIMB detent",
      "Yes, by setting the thrust levers to the FLEX/MCT detent",
      "Yes, but only by using TOGA"
    ],
    "correct": 3,
    "category": "Engine"
  },
  {
    "question": "When does the bidirectional power transfer unit (PTU) enable the yellow system to pressurize the green system and vice versa?",
    "answers": [
      "Only operational on the ground",
      "It operates automatically when a predetermined differential pressure is sensed",
      "It has to be switched on by the flight deck crew member when the differential pressure between systems (Green & Yellow) is >500 psi",
      "Only when the RAT has been deployed and the aircraft is using BAT power"
    ],
    "correct": 1,
    "category": "Hydraulics"
  },
  {
    "question": "If one engine ANTI ICE system fails the second one takes over and provides anti icing for both the engines.",
    "answers": [
      "Only with the aircraft on the ground and if OAT is below 0Â°C.",
      "It's not possible since the engine bleed sources are independent",
      "Yes, but on the ground the two position (Open & Closed) valve is closed",
      "The flight crew should switch to APU bleed air to replace the unserviceable unit"
    ],
    "correct": 1,
    "category": "Ice and rain protection"
  },
  {
    "question": "In Normal law, if one side stick is rapidly pulled fully back, can the aircraft's maximum allowable G load be exceeded?",
    "answers": [
      "Yes. Rapid side stick deflection must never be made",
      "Yes. Until maximum pitch attitude is reached the alpha floor protection is active",
      "No. At maximum G load, the side sticks are de-activated for 5 seconds",
      "No. The load factor protection overrides side stick commands to avoid excessive G loads"
    ],
    "correct": 3,
    "category": "Flight controls"
  },
  {
    "question": "Which hydraulic systems have fluid shutoff valves and why?",
    "answers": [
      "Green and Yellow (operated by the engine fire switches) to isolate fluid from a fire.",
      "Green and Yellow (operated by switches on the OHP) in case of PTU failures.",
      "All systems; to isolate the systems in event of fluid loss.",
      "All systems; for use by maintenance."
    ],
    "correct": 0,
    "category": "Hydraulics"
  },
  {
    "question": "What is the maximum brake temperature for takeoff (brake fans off)?",
    "answers": [
      "720Â°C",
      "520Â°C",
      "300Â°C",
      "330Â°C"
    ],
    "correct": 2,
    "category": "Landing gear"
  },
  {
    "question": "On the overhead panel, when should the AUDIO SWITCHING be selected to CAPT 3?",
    "answers": [
      "The Captain is using RMP tuning of the NAVAIDS.",
      "The Captain's ACP has failed.",
      "The Captain's loudspeaker has failed.",
      "Both RMPs have failed."
    ],
    "correct": 1,
    "category": "Communications"
  },
  {
    "question": "With either AP engaged, which statement is true?",
    "answers": [
      "Both side sticks are locked. The lock cannot be overridden",
      "Both side sticks are deactivated until the AP is disengaged",
      "Both side sticks are locked. By applying a certain force, the lock can be overridden but the AP remains engaged",
      "Both side sticks are locked. By applying a certain force, the lock can be overridden but the AP will disengage"
    ],
    "correct": 3,
    "category": "Auto flight"
  },
  {
    "question": "When RMP tuning of the NAVAIDS is in operation, which of the following statements is true?",
    "answers": [
      "The MCDU's will display the tuned navaids.",
      "There will be an amber light on the ACP.",
      "ILS DME is not available.",
      "The ILS receivers are tuned by their respective RMP's."
    ],
    "correct": 2,
    "category": "Navigation"
  },
  {
    "question": "Which of the following is true with regard to the PTU?",
    "answers": [
      "It is inhibited between engine starts.",
      "It is inhibited from electrical power-up until second engine start.",
      "It is used as a back-up following a leak in the Green or Yellow systems.",
      "It operates if the Green or Yellow system pressure falls below 2600 psi."
    ],
    "correct": 0,
    "category": "Hydraulics"
  },
  {
    "question": "On an approach to land, which of the following statements is true?",
    "answers": [
      "At 100 feet, alpha floor is inhibited; at 50 feet, the Flare Mode commences.",
      "At 100 feet, alpha floor is inhibited; the pitch trim is frozen; the aircraft pitches down.",
      "At 50 feet, alpha floor and pitch trim are inhibited; the aircraft pitches down.",
      "At 100 feet, alpha protection is lost; at 50 feet, the flare mode commences."
    ],
    "correct": 0,
    "category": "Auto flight"
  },
  {
    "question": "Which statement is correct when the APU FIRE pb is pushed to release it?",
    "answers": [
      "Only if airborne, an APU EMER SHUT DOWN will occur",
      "On the ground you should perform the ECAM actions to shut down the APU from the cockpit",
      "An APU AUTO SHUT DOWN will occur if both detection loops are operating",
      "An APU EMER SHUT DOWN will occur, in the air or on the ground."
    ],
    "correct": 3,
    "category": "APU"
  },
  {
    "question": "During a MANUAL START, when should the engine master switch be selected ON?",
    "answers": [
      "When the N2 has ceased accelerating (minimum of 20 % N2).",
      "Immediately after selecting the MAN START to ON.",
      "At 15% N1.",
      "When IGN A + B appears on the engine System Display."
    ],
    "correct": 0,
    "category": "Engine"
  },
  {
    "question": "With the PACK FLOW controller selected to LO, the actual pack flow may be ...",
    "answers": [
      "... HI due to APU bleed on.",
      "... NORM due to APU bleed on.",
      "... HI due to air conditioning temperature demands.",
      "... NORM or HI due to single pack operation."
    ],
    "correct": 0,
    "category": "Air systems"
  },
  {
    "question": "On the HYD overhead panel, which of the following is true of any pump FAULT light?",
    "answers": [
      "If it was due to overheat, it will extinguish when the fluid has cooled to normal temperature.",
      "It will remain illuminated until maintenance action has been taken.",
      "It will extinguish when the switch is placed to OFF.",
      "It is inhibited with engines running."
    ],
    "correct": 0,
    "category": "Hydraulics"
  },
  {
    "question": "What is the maximum speed for each flap configuration?",
    "answers": [
      "V stall speed.",
      "Green dot speed",
      "Vfe speed",
      "Vis speed"
    ],
    "correct": 2,
    "category": "Flight controls"
  },
  {
    "question": "What aircraft compartments are unpressurized?",
    "answers": [
      "Forward and aft cargo compartments",
      "Main and nose gear bay, and tail cone",
      "Tail cone, radome, and forward cargo compartment",
      "Main gear bay and aft cargo compartment"
    ],
    "correct": 1,
    "category": "Air systems"
  },
  {
    "question": "What happens in the event of BMC 1 failure?",
    "answers": [
      "BMC 2 takes over all functions.",
      "An APU BLEED LEAK will not be detected.",
      "A left WING BLEED LEAK will not be detected.",
      "An ENG 2 BLEED LEAK will not be detected."
    ],
    "correct": 1,
    "category": "Air systems"
  },
  {
    "question": "Regarding the pressurization system ... How are the safety valves controlled?",
    "answers": [
      "They are controlled with the MAN V/S CTL selector",
      "They are controlled with the MODE SEL p/b sw",
      "They are controlled with the DITCHING pb sw",
      "They are fully automatic and cannot be controlled manually"
    ],
    "correct": 3,
    "category": "Air systems"
  },
  {
    "question": "IRS IN ALIGN ECAM memo display becomes amber during an IR alignment if engines are running ...",
    "answers": [
      "If one IRS becomes faulty",
      "If one IRS is not aligned",
      "and pulses GREEN if the alignment of at least one IRS is faulty",
      "when two IRS's are in disagreement regarding the aircraft position"
    ],
    "correct": 0,
    "category": "Navigation"
  },
  {
    "question": "What triggers the autobrake system after landing?",
    "answers": [
      "Selection of reverse thrust.",
      "Weight on wheels.",
      "Main wheel spin-up.",
      "Ground Spoiler extension."
    ],
    "correct": 3,
    "category": "Landing gear"
  },
  {
    "question": "What is the maximum continuous load per generator?",
    "answers": [
      "85%.",
      "50%.",
      "75%.",
      "100%."
    ],
    "correct": 3,
    "category": "Electrical"
  },
  {
    "question": "What is the certified maximum number of seats on the A320?",
    "answers": [
      "There is no certified limit",
      "200",
      "180",
      "150"
    ],
    "correct": 2,
    "category": "Limitations"
  },
  {
    "question": "In normal flight, what does sidestick deflection demand?",
    "answers": [
      "load factor in pitch and proportional aileron and spoiler deflection in roll.",
      "load factor in pitch and rate of roll in roll.",
      "Rate of pitch change and 60Â° bank at full roll demand.",
      "A pitch attitude and rate of roll up to 33Â°."
    ],
    "correct": 1,
    "category": "Flight controls"
  },
  {
    "question": "What is signified by \"ILS APPR\" being displayed at the top center of the ND?",
    "answers": [
      "The ILS button on the FCU has been pressed",
      "The ILS button on the EFIS control panel has been pressed",
      "An ILS approach has been entered in the MCDU F-PLN",
      "LOC and G/S have been captured"
    ],
    "correct": 2,
    "category": "Navigation"
  },
  {
    "question": "For what areas does the Avionics ventilation system provide cooling?",
    "answers": [
      "The avionics bay and the flight deck (including the instruments and circuit breakers)",
      "The avionics bay, the flight deck instruments and the CIDS panels",
      "The radio bay, the flight deck instruments, the circuit breaker panels and the CIDS panels",
      "The avionics bay, the flight deck instruments and the aircraft batteries"
    ],
    "correct": 0,
    "category": "Air systems"
  },
  {
    "question": "Which of the following correctly describes the cross-bleed valve operation?",
    "answers": [
      "In manual, it is electrically selected and pneumatically operated.",
      "In auto, it is pneumatically operated.",
      "In auto, it will automatically open, if necessary, to equalize the duct pressures.",
      "In auto, it will be closed if the engine bleed valves are open."
    ],
    "correct": 3,
    "category": "Air systems"
  },
  {
    "question": "On ground, with the BLUE hydraulic pump switch at AUTO and with the AC POWER available, when will the pump operate?",
    "answers": [
      "If one engine is running.",
      "Only after both engines have been started.",
      "Only when the aircraft is in flight.",
      "Only if the maintenance bus is connected."
    ],
    "correct": 0,
    "category": "Hydraulics"
  },
  {
    "question": "What is the maximum wind speed for passenger door operation?",
    "answers": [
      "70 knots",
      "65 knots",
      "55 knots (gusting 60 knots).",
      "52 knots"
    ],
    "correct": 1,
    "category": "Limitations"
  },
  {
    "question": "The flight management part of the FMGC includes the following elements:",
    "answers": [
      "Navigation, flight planning and A/THR commands",
      "Performance optimization, A/THR and AP commands",
      "Navigation, Flight planning, Performance optimization and flight predictions",
      "AP and FD commands and flight envelope computations"
    ],
    "correct": 2,
    "category": "Auto flight"
  },
  {
    "question": "Is it permissible to use reverse thrust to power back on the ground?",
    "answers": [
      "Yes, but only in an uncongested area",
      "No, unless it is on a downslope",
      "No, it is prohibited",
      "Yes, if no push back tug is available"
    ],
    "correct": 2,
    "category": "Engine"
  },
  {
    "question": "What is the maximum altitude for APU single pack bleed air operation?",
    "answers": [
      "39,100 ft",
      "30,000 ft",
      "22,500 ft",
      "15,000 ft"
    ],
    "correct": 2,
    "category": "APU"
  },
  {
    "question": "Which of the following defines Icing conditions?",
    "answers": [
      "Before T/O: OAT 15Â°C or below, contaminated runway.",
      "In flight: TAT 10Â°C down to SAT minus 30Â°C.",
      "In flight: SAT 10Â°C or below.",
      "Before T/O: OAT 10Â°C or below, visible moisture, visibility less than 1 mile."
    ],
    "correct": 3,
    "category": "Performance"
  },
  {
    "question": "How is a rapid IRS alignment carried out?",
    "answers": [
      "On all transit stops by recycling the IR selectors OFF/ON.",
      "If on the ground set the IR Rotary Selectors to OFF then back to NAV within 5 seconds.",
      "If on the ground set the IR Rotary Selectors to OFF then back to NAV after more than 5 seconds.",
      "On all transit stops, by recycling the NAV and ADR switches OFF/ON."
    ],
    "correct": 1,
    "category": "Navigation"
  },
  {
    "question": "After takeoff, you retract the landing gear and get this ECAM caution: SHOCK ABSORBER FAULT. What does it mean?",
    "answers": [
      "The right main LG leg shortening mechanism has failed and the LG will not retract",
      "One shock absorber not extended when airborne",
      "The right main LG lengthening mechanism has failed and that leg will not retract",
      "The right main LG lengthening mechanism must be reset using the reset position on the LDG GEAR GRVTY EXTN sw"
    ],
    "correct": 1,
    "category": "Landing gear"
  },
  {
    "question": "The APU may be started and operated, even if the LOW OIL LEVEL ECAM advisory is displayed.",
    "answers": [
      "True",
      "False",
      "The APU doesn't need OIL below FL 100",
      "The APU doesn't need OIL below FL 200"
    ],
    "correct": 0,
    "category": "APU"
  },
  {
    "question": "When does the ECAM E/WD memo REFUELG appear?",
    "answers": [
      "When the END Light illuminates steady green.",
      "When the refuel hose is connected to the coupling.",
      "When the MODE SELECT switch is placed to REFUEL",
      "When the refueling control panel door is open."
    ],
    "correct": 3,
    "category": "Engine"
  },
  {
    "question": "What is the purpose of the safety valves in the pressurization system?",
    "answers": [
      "To protect against excessive cabin V/S in manual mode",
      "To protect against water ingress in the event of ditching",
      "To protect against excessive cabin altitude",
      "To protect against the cabin differential pressure from going too high or too low"
    ],
    "correct": 3,
    "category": "Air systems"
  },
  {
    "question": "Under what conditions will the Autopilot disconnect?",
    "answers": [
      "Bank Angle exceeds 45Â°, at Vmo / Mmo, if the speed reaches Alpha Prot +1Â°",
      "Bank Angle exceeds 45Â°, when High Speed Protection becomes active, if the speed reaches Alpha Prot",
      "Bank Angle exceeds 33Â°, when High Speed Protection becomes active, if the speed reaches Alpha Prot +1Â°",
      "Bank Angle exceeds 45Â°, when High Speed Protection becomes active, if the speed reaches Alpha Prot +1Â°"
    ],
    "correct": 3,
    "category": "Auto flight"
  },
  {
    "question": "APU air bleed extraction for wing anti-ice is permitted.",
    "answers": [
      "False",
      "True",
      "Only in winter time",
      "Only if OAT is below ISA at sea level"
    ],
    "correct": 0,
    "category": "APU"
  },
  {
    "question": "What occurs when the APU MASTER switch is selected to ON?",
    "answers": [
      "The APU air intake flap opens and the starter motor engages immediately.",
      "The APU air intake flap opens and the starter motor engages when the flap is fully open.",
      "The APU fuel pump will operate.",
      "The APU air intake flap opens."
    ],
    "correct": 3,
    "category": "APU"
  },
  {
    "question": "If a spoiler has failed, how does the system compensate for undesirable yaw?",
    "answers": [
      "Automatic rudder trim.",
      "The symmetrical spoiler on the other wing is inhibited.",
      "F.A.C. commands.",
      "ELAC turn coordination commands."
    ],
    "correct": 1,
    "category": "Flight controls"
  },
  {
    "question": "Which of the following conditions will trigger a fire warning?",
    "answers": [
      "loops A and B failure within 7 seconds of each other (Engine)",
      "loops A and B failure within 7 seconds of each other (APU)",
      "Fire detection by Loops A and B together (Engine)",
      "loss or failure of a single loop A (Engine)"
    ],
    "correct": 2,
    "category": "Fire protection"
  },
  {
    "question": "How could you turn off RMP 1?",
    "answers": [
      "Via ON/OFF switch on RMP panel.",
      "Via switching panel on glare shield.",
      "Via circuit breaker.",
      "It will switch off automatically if on batteries."
    ],
    "correct": 0,
    "category": "Communications"
  },
  {
    "question": "What could be the cause if, during a pre-flight check, the IRS ALIGN lights are seen to be flashing?",
    "answers": [
      "The IRS is using battery power.",
      "Loss of all functions except ATT and HDG.",
      "Failure to switch on the associated ADR.",
      "The IRS is awaiting a position entry."
    ],
    "correct": 3,
    "category": "Navigation"
  },
  {
    "question": "What is the correct statement about the RAT?",
    "answers": [
      "The RAT is able to pressurize the GREEN or the YELLOW systems",
      "The RAT will deploy automatically in the event of low pressure in the GREEN system",
      "The RAT will deploy automatically when AC bus 1 and 2 are both lost, airspeed above 100 kt",
      "The RAT can be stowed by the crew while they are airborne"
    ],
    "correct": 2,
    "category": "Hydraulics"
  },
  {
    "question": "If both nosewheel steering handwheels are offset at the same time, which of the following is true?",
    "answers": [
      "The Captain's input will override the F/O's input.",
      "The pilot making the larger input has control.",
      "The input to the nosewheel steering is the sum of both signals.",
      "The first pilot to offset the handwheel has control."
    ],
    "correct": 2,
    "category": "Landing gear"
  },
  {
    "question": "Regarding the Avionics Ventilation system, which of the following statements is true?",
    "answers": [
      "The Extract Valve may be partially open when taxiing.",
      "The Inlet and Extract Valves may be open in flight.",
      "The Inlet and Extract Valves must both be open on the ground.",
      "The Inlet Valve should always be closed in flight."
    ],
    "correct": 3,
    "category": "Air systems"
  },
  {
    "question": "Which of the following statements is correct with regard to the APU?",
    "answers": [
      "APU auto shut down can only occur on the ground",
      "If bleed air has been used, when the APU MASTER SW is released an immediate APU shut-down will occur",
      "The APU will only shut down automatically if a fire is detected",
      "If the APU SHUT OFF p/b is pushed on the interphone panel under the nose fuselage, an emergency shut down will occur"
    ],
    "correct": 3,
    "category": "APU"
  },
  {
    "question": "What does FADEC compute the thrust rating based on?",
    "answers": [
      "The measured thrust lever angle",
      "The gross weight and ambient air temperature",
      "Pilot modifications of the performance database",
      "MCDU PERF or PROG page inputs"
    ],
    "correct": 0,
    "category": "Engine"
  },
  {
    "question": "On the Engine Panel, what does an illuminated FAULT light indicate?",
    "answers": [
      "Abort of an AUTOMATIC START.",
      "A fault in the engine fire detection system.",
      "Engine fire extinguisher bottle pressure low.",
      "Failure of igniters A and B."
    ],
    "correct": 0,
    "category": "Engine"
  },
  {
    "question": "In Normal Law, what is the maximum bank angle you can reach with the side stick fully deflected?",
    "answers": [
      "There is no bank angle limitation",
      "33Â°",
      "67Â°",
      "50Â°"
    ],
    "correct": 2,
    "category": "Flight controls"
  },
  {
    "question": "Regarding cabin pressure, what are the maximum differential pressures?",
    "answers": [
      "+8.6 PSI, -1.0 PSI",
      "+8.5 PSI, -0.5 PSI",
      "+9 PSI, -1.0 PSI",
      "+8.06 PSI, -1.0 PSI"
    ],
    "correct": 2,
    "category": "Limitations"
  },
  {
    "question": "When is the FUEL USED indication (on the ECAM SD) reset to zero?",
    "answers": [
      "When the associated MASTER SW is selected OFF (on the ground only).",
      "When the associated MASTER SW is selected OFF (at any time).",
      "During associated engine start-up sequence (on the ground only).",
      "During associated engine start-up sequence (at any time)."
    ],
    "correct": 2,
    "category": "Engine"
  },
  {
    "question": "What is the minimum oil quantity for dispatch?",
    "answers": [
      "9.5 qt + 0.5 qt per hour estimated flight time",
      "12.0 qt",
      "15.0 qt",
      "10.6 qt"
    ],
    "correct": 0,
    "category": "Engine"
  },
  {
    "question": "In the event of a hydraulic system overheat, the affected system will be indicated by a ...",
    "answers": [
      "... FAULT light on the associated overhead panel pb.",
      "... FAULT light on the associated overhead panel pb after 30 seconds.",
      "... MASTER CAUTION on the MCDU.",
      "... FUEL memo on the E/WD."
    ],
    "correct": 0,
    "category": "Hydraulics"
  },
  {
    "question": "Which of the following lists the correct actions to be carried out when performing a BLOWDOWN bottle test?",
    "answers": [
      "All engine and APU fire warnings and a discharge light.",
      "The warnings only for the selected bottle.",
      "The cargo smoke detection and agent blowdown warnings.",
      "The discharge lights only."
    ],
    "correct": 1,
    "category": "Fire protection"
  },
  {
    "question": "What is the maximum altitude for APU start using aircraft batteries only?",
    "answers": [
      "FL200",
      "FL100",
      "FL150",
      "FL250"
    ],
    "correct": 3,
    "category": "APU"
  },
  {
    "question": "After engine start, how can the flight crew reset the BMC?",
    "answers": [
      "By setting the BLEED pushbutton OFF then ON.",
      "By setting the affected BMC pushbutton on the overhead panel OFF then ON.",
      "By setting the BLEED pushbutton OFF.",
      "It can only be reset by maintenance action."
    ],
    "correct": 3,
    "category": "Air systems"
  },
  {
    "question": "Which of the following correctly completes the statement? \"In the event of a loss of the green system, the alternate braking is powered by the yellow system and ...",
    "answers": [
      "... is not affected by loss of anti-skid.",
      "... the accumulator is pressurized.",
      "... is available when the Yellow electric pump is on.",
      "... must be armed on the overhead panel."
    ],
    "correct": 1,
    "category": "Hydraulics"
  },
  {
    "question": "What is the normal position of the PACK FLOW switch?",
    "answers": [
      "Hi for all operations",
      "NORM for all operations",
      "LO if the aircraft is below 33,000 ft and passenger occupancy is less than 138",
      "NORM for take-off, HI for climb and LO for cruise."
    ],
    "correct": 1,
    "category": "Air systems"
  },
  {
    "question": "Which of the following correctly completes this statement? \"The aircraft rudder travel is limited as a function of ...",
    "answers": [
      "... airspeed.",
      "... altitude.",
      "... radio height.",
      "... flight phase."
    ],
    "correct": 0,
    "category": "Flight controls"
  },
  {
    "question": "Which of the following correctly completes this statement? \"There are ...",
    "answers": [
      "... two Air Conditioning Units on the A320.",
      "... three Air Conditioning Units on the A320.",
      "... two Air Conditioning Units on the A320 and a ram air supply.",
      "... two Air Conditioning Units on the A320 and two additional emergency ram air inlets."
    ],
    "correct": 3,
    "category": "Air systems"
  },
  {
    "question": "When are the PFD and ND decluttered?",
    "answers": [
      "The PFD when passing 150 feet RA and the ND when passing 1500 feet RA.",
      "The PFD when passing 30 feet RA and the ND when passing 80 knots.",
      "The PFD when passing 30 feet RA and the ND when passing 1500 feet RA.",
      "The PFD when passing 1500 feet RA and the ND when passing 30 feet RA."
    ],
    "correct": 1,
    "category": "Auto flight"
  },
  {
    "question": "In the event of a complete loss of braking, which of the following lists the correct actions to be taken?",
    "answers": [
      "Use of the Yellow hydraulic system, then the accumulator.",
      "Use of the Yellow system only.",
      "Apply full brake pedal force.",
      "Use of the accumulator only."
    ],
    "correct": 0,
    "category": "Hydraulics"
  },
  {
    "question": "What is the normal power source for the IRUs?",
    "answers": [
      "AC Bus 1 and AC Bus 2",
      "DC Bus 1 and DC Bus 2",
      "DC Bat Bus and AC ESS Bus",
      "DC Bat Bus only"
    ],
    "correct": 0,
    "category": "Electrical"
  },
  {
    "question": "What do you have to do to obtain 100% oxygen when using the oxygen mask?",
    "answers": [
      "Move the FLOW SELECTOR to the 100% position.",
      "Move the N/100% selector to the 100% position.",
      "Push the emergency test button.",
      "Move the N/100% selector to the 100% position and press the emergency test button."
    ],
    "correct": 1,
    "category": "Air systems"
  },
  {
    "question": "In a fuel leak scenario, the fuel transfer system ...",
    "answers": [
      "... will automatically start transferring fuel.",
      "... has to be manually activated.",
      "... should be selected off.",
      "... is automatically deactivated."
    ],
    "correct": 3,
    "category": "Engine"
  },
  {
    "question": "When does the APU bleed valve close automatically?",
    "answers": [
      "When the APU is shut down.",
      "When the landing gear is selected down.",
      "When APU N1 is below 50%.",
      "When the APU bleed air pressure is sufficient."
    ],
    "correct": 0,
    "category": "APU"
  },
  {
    "question": "When the aircraft is in alternate or direct law, what are the normal color of the PFD FPV, FD and FMA indications?",
    "answers": [
      "FPV and FD in green; FMA in amber.",
      "FPV and FD in green; FMA in red.",
      "FPV in magenta; FD in green; FMA in amber.",
      "FPV in amber; FD and FMA in green."
    ],
    "correct": 2,
    "category": "Auto flight"
  },
  {
    "question": "When does the ECAM warning display the status page?",
    "answers": [
      "Immediately following engine shutdown.",
      "Immediately following engine start-up.",
      "On selection of the APU.",
      "When ground power is connected."
    ],
    "correct": 0,
    "category": "Indicating/recording systems"
  },
  {
    "question": "On take-off, when the thrust levers are set to the FLEX detent, which of the following thrust modes will be displayed on the FMA?",
    "answers": [
      "MAN THR",
      "MAN FLEX",
      "THR CLB",
      "THR FLX"
    ],
    "correct": 1,
    "category": "Engine"
  },
  {
    "question": "What is the meaning of the white arc on the N1 indication?",
    "answers": [
      "Thrust command for active mode",
      "Thrust demand for active mode",
      "Position of the thrust levers",
      "Limitation on the N1 value for all modes"
    ],
    "correct": 2,
    "category": "Engine"
  },
  {
    "question": "When are the speed brakes inhibited in flight?",
    "answers": [
      "Flaps in config 2",
      "Thrust levers above idle",
      "SEC 1 and 3 fail",
      "SEC 1 and 2 fail"
    ],
    "correct": 2,
    "category": "Flight controls"
  },
  {
    "question": "How is a pack overheat indicated?",
    "answers": [
      "By an amber FAULT light on the AIR COND panel",
      "By an amber fault light on the COND SD page",
      "By an ECAM alert",
      "By a red fault light on the AIR COND panel"
    ],
    "correct": 0,
    "category": "Air systems"
  },
  {
    "question": "What do you understand by the term \"Normal Law\"?",
    "answers": [
      "Pitch attitude, load factor and low speed stabilities are the main protection features",
      "Load factor, attitude, high speed, high angle of attack and bank angle protections",
      "Maximum operating speed limitations, minimum operating speed limitations, and minimum descent rate limitations",
      "Load factor, pitch angle, alpha floor, high speed and bank angle protections"
    ],
    "correct": 1,
    "category": "Flight controls"
  },
  {
    "question": "After IRS realignment, the aircraft's position is automatically updated by ...",
    "answers": [
      "GPS only.",
      "FMGC only.",
      "DME only.",
      "GPIRS."
    ],
    "correct": 3,
    "category": "Navigation"
  },
  {
    "question": "What happens when the Evacuation Command pushbutton switch is pressed?",
    "answers": [
      "An aural alert sounds in the cockpit only.",
      "The emergency evacuation signal sounds throughout the aircraft.",
      "An aural alert sounds in the cabin only.",
      "A signal is sent to the flight attendant panel."
    ],
    "correct": 3,
    "category": "Indicating/recording systems"
  },
  {
    "question": "Which of the following is the correct statement? The Side Stick Take Over pushbutton ...",
    "answers": [
      "... must be used by the Captain when using the rudder pedals.",
      "... disengages the other stick, when pressed.",
      "... engages the other stick, when pressed.",
      "... must be used in the event of a failure of the autopilot."
    ],
    "correct": 1,
    "category": "Flight controls"
  },
  {
    "question": "What is the maximum altitude for APU two-pack bleed air operation?",
    "answers": [
      "15,000 ft",
      "20,000 ft",
      "22,500 ft",
      "15,000 ft"
    ],
    "correct": 3,
    "category": "APU"
  },
  {
    "question": "At what temperature do the engine bleed valves close automatically?",
    "answers": [
      "100Â°C",
      "200Â°C",
      "85Â°C",
      "185Â°C"
    ],
    "correct": 1,
    "category": "Engine"
  },
  {
    "question": "If the slats and/or flaps are not in the expected configuration ...",
    "answers": [
      "... a warning will be activated if the other pilot's side-stick is deflected.",
      "... the ECAM will present an advisory.",
      "... an audible warning will be activated.",
      "... the aircraft will automatically enter ALTERNATE LAW."
    ],
    "correct": 0,
    "category": "Flight controls"
  },
  {
    "question": "When is the side-stick priority indication seen?",
    "answers": [
      "When there is simultaneous input to the side-sticks.",
      "When there is an out-of-trim condition.",
      "When the autopilot is engaged.",
      "When the aircraft is in ALTERNATE LAW."
    ],
    "correct": 0,
    "category": "Flight controls"
  },
  {
    "question": "What is the maximum altitude for landing gear operation?",
    "answers": [
      "25,000 ft",
      "22,500 ft",
      "20,000 ft",
      "15,000 ft"
    ],
    "correct": 0,
    "category": "Landing gear"
  },
  {
    "question": "When an ELAC fails, what happens to the THS?",
    "answers": [
      "THS is frozen.",
      "THS reverts to a mechanical standby.",
      "THS reverts to direct pitch control.",
      "THS remains active."
    ],
    "correct": 2,
    "category": "Flight controls"
  },
  {
    "question": "What is the function of the Ram Air Turbine (RAT)?",
    "answers": [
      "To provide AC power during an emergency.",
      "To provide hydraulic pressure during an emergency.",
      "To provide bleed air during an emergency.",
      "To provide essential electrical power in the event of an emergency."
    ],
    "correct": 1,
    "category": "Hydraulics"
  },
  {
    "question": "What is the maximum altitude for APU bleed air extraction?",
    "answers": [
      "30,000 ft",
      "20,000 ft",
      "25,000 ft",
      "22,500 ft"
    ],
    "correct": 1,
    "category": "APU"
  },
  {
    "question": "On the fuel control panel, when will the transfer valves open?",
    "answers": [
      "When the outer wing tanks are full.",
      "When the inner wing tanks are empty.",
      "When the inner wing tank fuel level decreases to 1,650 kg.",
      "When the outer wing tanks are empty."
    ],
    "correct": 2,
    "category": "Engine"
  },
  {
    "question": "What are the pitch and roll limits in Normal Law?",
    "answers": [
      "Pitch: +20Â° (+10Â° at low speed), -15Â°, Roll: 45Â°.",
      "Pitch: +30Â° (+25Â° at low speed), -15Â°, Roll: 67Â°.",
      "Pitch: +25Â° (+20Â° at low speed), -15Â°, Roll: 45Â°.",
      "Pitch: +30Â°, Roll: 45Â°."
    ],
    "correct": 1,
    "category": "Limitations"
  },
  {
    "question": "Which hydraulic system operates the landing gear?",
    "answers": [
      "Green system.",
      "Blue system.",
      "Yellow system.",
      "Blue and Yellow systems."
    ],
    "correct": 0,
    "category": "Hydraulics"
  },
  {
    "question": "If the sidestick priority indication shows green only ...",
    "answers": [
      "... the other side-stick has been disengaged.",
      "... the autopilot is engaged.",
      "... both side-sticks are neutral.",
      "... both side-sticks are active."
    ],
    "correct": 3,
    "category": "Flight controls"
  },
  {
    "question": "What will the ECAM display when you disconnect the engine generators?",
    "answers": [
      "A caution for each generator.",
      "A failure warning for the affected system.",
      "An electrical system schematic.",
      "A general electrical failure."
    ],
    "correct": 2,
    "category": "Indicating/recording systems"
  },
  {
    "question": "How can the flight crew select manual pressurization?",
    "answers": [
      "By placing the DITCHING pushbutton to ON.",
      "By placing the MODE SEL pushbutton to MAN.",
      "By placing the CABIN PRESS MODE SEL pushbutton to MAN.",
      "By placing the MODE SEL pushbutton to AUTO."
    ],
    "correct": 1,
    "category": "Air systems"
  },
  {
    "question": "When will the aircraft automatically enter ALTERNATE LAW?",
    "answers": [
      "When multiple system failures occur.",
      "When the autopilot is disengaged.",
      "When the aircraft descends below 1,500 ft.",
      "When the side-sticks are deflected simultaneously."
    ],
    "correct": 0,
    "category": "Flight controls"
  },
  {
    "question": "When does the Flight Augmentation Computer (FAC) become active?",
    "answers": [
      "Only during manual flight.",
      "Only when the autopilot is engaged.",
      "Only during flight on autopilot and manual flight.",
      "Only during manual flight and with the autopilot engaged."
    ],
    "correct": 3,
    "category": "Flight controls"
  },
  {
    "question": "What happens when the DITCHING pushbutton is selected ON?",
    "answers": [
      "All valves below the water line are closed.",
      "The aircraft enters ditching mode.",
      "The fuel transfer valves are opened.",
      "All cabin outflow valves are closed."
    ],
    "correct": 0,
    "category": "Air systems"
  },
  {
    "question": "What happens to the speed brake panels when the aircraft descends below 10,000 ft?",
    "answers": [
      "They automatically retract.",
      "They remain in the selected position.",
      "They automatically extend.",
      "They retract to the half-speed position."
    ],
    "correct": 1,
    "category": "Flight controls"
  },
  {
    "question": "When the landing gear is down, what happens to the T.O. CONFIG TEST pushbutton?",
    "answers": [
      "The T.O. CONFIG TEST pushbutton is inhibited.",
      "The T.O. CONFIG TEST pushbutton remains active.",
      "The T.O. CONFIG TEST pushbutton must be pressed to reset the system.",
      "The T.O. CONFIG TEST pushbutton is automatically reset."
    ],
    "correct": 0,
    "category": "Landing gear"
  },
  {
    "question": "What happens when the RAT MAN ON pushbutton is pressed?",
    "answers": [
      "The RAT is manually deployed.",
      "The RAT is electrically armed.",
      "The RAT is automatically deployed.",
      "The RAT is locked in the stowed position."
    ],
    "correct": 0,
    "category": "Hydraulics"
  },
  {
    "question": "Which of the following correctly completes the statement? \"The engine control system is designed to ...",
    "answers": [
      "... provide automatic start-up only.",
      "... provide automatic start-up and shut down.",
      "... provide manual start-up and automatic shut down.",
      "... provide automatic start-up and manual shut down."
    ],
    "correct": 1,
    "category": "Engine"
  },
  {
    "question": "How many valves does the aircraft pressurization system have?",
    "answers": [
      "Two",
      "Three",
      "Four",
      "Five"
    ],
    "correct": 3,
    "category": "Air systems"
  },
  {
    "question": "What happens to the RAT if the aircraft speed drops below 140 kt?",
    "answers": [
      "The RAT is automatically retracted.",
      "The RAT is manually retracted.",
      "The RAT is electrically disconnected.",
      "The RAT can no longer power the aircraft systems."
    ],
    "correct": 3,
    "category": "Hydraulics"
  },
  {
    "question": "How is an automatic pressurization system fault indicated?",
    "answers": [
      "By an amber fault light on the overhead panel.",
      "By a red warning on the ECAM.",
      "By an advisory on the ECAM.",
      "By an alert on the MCDU."
    ],
    "correct": 1,
    "category": "Air systems"
  },
  {
    "question": "What is the role of the spoiler panels?",
    "answers": [
      "They are used for roll control and ground spoilers.",
      "They are used for roll control only.",
      "They are used as speed brakes only.",
      "They are used as ground spoilers only."
    ],
    "correct": 0,
    "category": "Flight controls"
  },
  {
    "question": "What happens to the spoilers during an automatic landing?",
    "answers": [
      "They are automatically retracted.",
      "They are automatically extended on touchdown.",
      "They remain in the selected position.",
      "They are manually extended."
    ],
    "correct": 1,
    "category": "Flight controls"
  },
  {
    "question": "When are the ECAM status and recall pages displayed?",
    "answers": [
      "Immediately following an engine failure.",
      "Immediately following an engine shutdown.",
      "When ground power is connected.",
      "When the aircraft reaches cruising altitude."
    ],
    "correct": 1,
    "category": "Indicating/recording systems"
  },
  {
    "question": "When does the FUEL USED indication reset to zero?",
    "answers": [
      "When the associated MASTER SW is selected OFF.",
      "During the associated engine shutdown sequence.",
      "During the associated engine start-up sequence.",
      "When the aircraft reaches cruising altitude."
    ],
    "correct": 2,
    "category": "Engine"
  },
  {
    "question": "What is the purpose of the oxygen system?",
    "answers": [
      "To provide supplemental oxygen for the crew and passengers.",
      "To provide oxygen for the engines.",
      "To pressurize the cabin.",
      "To provide emergency oxygen for the crew only."
    ],
    "correct": 0,
    "category": "Air systems"
  },
  {
    "question": "What happens to the aircraft systems when the RAT is deployed?",
    "answers": [
      "The aircraft systems are powered by the main battery.",
      "The aircraft systems are powered by the RAT and the main battery.",
      "The aircraft systems are powered by the RAT only.",
      "The aircraft systems are powered by the RAT and the emergency generator."
    ],
    "correct": 3,
    "category": "Hydraulics"
  },
  {
    "question": "What happens to the rudder when the aircraft is in direct law?",
    "answers": [
      "The rudder remains in the last commanded position.",
      "The rudder is controlled by the autopilot.",
      "The rudder is manually controlled by the flight crew.",
      "The rudder is automatically centered."
    ],
    "correct": 2,
    "category": "Flight controls"
  },
  {
    "question": "What is the function of the emergency electrical configuration?",
    "answers": [
      "To provide power to the essential systems during an emergency.",
      "To provide power to the essential systems when both engine-driven generators are inoperative.",
      "To provide power to the essential systems when the aircraft is on the ground.",
      "To provide power to the essential systems during an electrical failure."
    ],
    "correct": 1,
    "category": "Electrical"
  },
  {
    "question": "When do the speed brakes automatically retract?",
    "answers": [
      "When the aircraft reaches 10,000 ft.",
      "When the aircraft is in the landing configuration.",
      "When the thrust levers are advanced.",
      "When the autopilot is engaged."
    ],
    "correct": 2,
    "category": "Flight controls"
  },
  {
    "question": "When does the T.O. CONFIG TEST pushbutton inhibit the take-off configuration warnings?",
    "answers": [
      "When the aircraft is on the ground.",
      "When the aircraft is in flight.",
      "When the aircraft reaches 100 knots.",
      "When the aircraft is in the landing configuration."
    ],
    "correct": 0,
    "category": "Indicating/recording systems"
  },
  {
    "question": "What happens to the landing gear when the LGCIU detects a fault?",
    "answers": [
      "The landing gear remains in the last selected position.",
      "The landing gear automatically extends.",
      "The landing gear automatically retracts.",
      "The landing gear is manually controlled by the flight crew."
    ],
    "correct": 0,
    "category": "Landing gear"
  },
  {
    "question": "What is the role of the FACs in the flight control system?",
    "answers": [
      "To provide flight envelope protection and rudder control.",
      "To provide pitch and roll control.",
      "To provide automatic landing capabilities.",
      "To provide autopilot and autothrust functions."
    ],
    "correct": 0,
    "category": "Flight controls"
  },
  {
    "question": "What happens to the aircraft's electrical system when the emergency generator is operating?",
    "answers": [
      "The essential busses are powered by the emergency generator.",
      "All aircraft systems are powered by the emergency generator.",
      "The main battery powers the essential busses.",
      "The RAT powers the essential busses."
    ],
    "correct": 0,
    "category": "Electrical"
  },
  {
    "question": "What is the maximum altitude for APU start using battery power only?",
    "answers": [
      "20,000 ft",
      "25,000 ft",
      "30,000 ft",
      "35,000 ft"
    ],
    "correct": 1,
    "category": "APU"
  },
  {
    "question": "When are the ECAM status and recall pages displayed?",
    "answers": [
      "Immediately following an engine shutdown.",
      "When the aircraft reaches cruising altitude.",
      "When the aircraft is in the landing configuration.",
      "When the ground power is connected."
    ],
    "correct": 0,
    "category": "Indicating/recording systems"
  },
  {
    "question": "What happens when the MODE SEL pushbutton is selected to MAN?",
    "answers": [
      "The pressurization system operates automatically.",
      "The pressurization system operates manually.",
      "The cabin outflow valves close automatically.",
      "The cabin outflow valves open automatically."
    ],
    "correct": 1,
    "category": "Air systems"
  },
  {
    "question": "What is the purpose of the oxygen system?",
    "answers": [
      "To provide supplemental oxygen for the crew and passengers.",
      "To pressurize the cabin.",
      "To provide oxygen for the engines.",
      "To provide emergency oxygen for the crew only."
    ],
    "correct": 0,
    "category": "Air systems"
  },
  {
    "question": "What happens when the RAT is manually deployed?",
    "answers": [
      "The aircraft systems are powered by the main battery.",
      "The aircraft systems are powered by the RAT and the emergency generator.",
      "The aircraft systems are powered by the RAT only.",
      "The aircraft systems are powered by the emergency generator only."
    ],
    "correct": 1,
    "category": "Hydraulics"
  },
  {
    "question": "When does the T.O. CONFIG TEST pushbutton inhibit the take-off configuration warnings?",
    "answers": [
      "When the aircraft is on the ground.",
      "When the aircraft is in flight.",
      "When the aircraft reaches 100 knots.",
      "When the aircraft is in the landing configuration."
    ],
    "correct": 0,
    "category": "Indicating/reporting systems"
  },
  {
    "question": "What happens to the aircraft's electrical system when the emergency generator is operating?",
    "answers": [
      "The essential busses are powered by the emergency generator.",
      "All aircraft systems are powered by the emergency generator.",
      "The main battery powers the essential busses.",
      "The RAT powers the essential busses."
    ],
    "correct": 0,
    "category": "Electrical"
  },
  {
    "question": "What is the limiting factor for opening the Ram Air Valve?",
    "answers": [
      "Aircraft altitude at or below 10,000 ft.",
      "Cabin differential pressure is lower than 1 PSI.",
      "Aircraft speed at or below 300 kt.",
      "Aircraft must be fully depressurized."
    ],
    "correct": 1,
    "category": "Air systems"
  },
  {
    "question": "The nosewheel steering tillers can turn the nosewheel up to how many degrees?",
    "answers": [
      "75Â°",
      "65Â°",
      "78Â°",
      "70Â°"
    ],
    "correct": 0,
    "category": "Landing gear"
  },
  {
    "question": "In order to perform a L/G gravity extension of the landing gear, what must the crew do?",
    "answers": [
      "Turn the gear crank counter-clockwise for 3 turns.",
      "Turn the gear crank clockwise for 2 turns.",
      "Turn the gear crank clockwise for 3 turns.",
      "Turn the gear crank counter-clockwise for 2 turns."
    ],
    "correct": 2,
    "category": "Landing gear"
  },
  {
    "question": "There are two triangles for each gear on the ECAM WHEEL page. What do they represent?",
    "answers": [
      "Each triangle represents one wheel on the gear",
      "Each triangle represents the gear position detected by one of the two LGCIUs",
      "Each triangle represents one of the braking systems available for that gear",
      "The front triangle indicates the position of that gear and the back triangle indicates the status of the brakes of that gear"
    ],
    "correct": 1,
    "category": "Landing gear"
  },
  {
    "question": "Which of the following conditions will cause the cabin signs and lighting to illuminate?",
    "answers": [
      "Above 11,300 feet (approx.) cabin altitude, regardless of the SEAT BELTS and NO SMOKING switch positions.",
      "Above 11,300 feet (approx.) cabin altitude, provided the EMER EXIT LT switch is at ARM or ON.",
      "Above 11,300 feet (approx.) cabin altitude, provided the EMER EXIT LT switch is at ARM.",
      "If the cabin altitude exceeds 14,000 feet."
    ],
    "correct": 0,
    "category": "Air systems"
  },
  {
    "question": "What is important to remember to avoid damaging the IDG disconnection mechanism?",
    "answers": [
      "You must push the IDG pb until the GEN FAULT light comes on and then for at least 3 more seconds",
      "You must push the IDG pb for a maximum of 10 seconds",
      "You push the IDG pb for at least 10 seconds to ensure the disconnection",
      "You push the IDG pb until the GEN FAULT light comes on, but only for a maximum of 3 seconds"
    ],
    "correct": 3,
    "category": "Engine"
  },
  {
    "question": "During a manual start, what function does the FADEC perform?",
    "answers": [
      "Passive monitoring of the start sequence, to close the start valve and cut off the ignition on the ground",
      "To control the start sequence and take corrective action in case of failure or malfunction",
      "The FADEC does not perform any function during a manual start and all actions have to be carried out by the pilots",
      "The FADEC does not work until idle is reached"
    ],
    "correct": 0,
    "category": "Engine"
  },
  {
    "question": "Under what circumstances will MECHANICAL BACK-UP occur?",
    "answers": [
      "Loss of all flight control computers: aircraft is controlled using stabilizer and rudder.",
      "Loss of all flight control computers: aircraft is controlled using elevator and rudder.",
      "Loss of G and Y hydraulics: aircraft is controlled using stabilizer and rudder.",
      "Loss of all hydraulics."
    ],
    "correct": 0,
    "category": "Flight controls"
  },
  {
    "question": "In the MEL 'Remarks or Exceptions' column, what is signified by (O)?",
    "answers": [
      "Aircraft may be flown back to base for rectification.",
      "An operational procedure must be carried out.",
      "A procedure to be carried out by maintenance.",
      "Dispatch is not allowed."
    ],
    "correct": 1,
    "category": "Performance"
  },
  {
    "question": "Which surfaces of the aircraft are anti-iced?",
    "answers": [
      "Outboard wing leading edge, stabilizer leading edge and engine air intake.",
      "Outboard wing leading edge, Fin leading edge and engine air intake.",
      "All of the wing leading edge and engine air intake.",
      "Three outboard slats on each wing and engine air intake."
    ],
    "correct": 3,
    "category": "Flight controls"
  },
  {
    "question": "Which slats in each wing can be heated with hot air from the pneumatic system?",
    "answers": [
      "The three inboard slats (1-2-3)",
      "The three outboard slats (3-4-5)",
      "The even slats (2-4)",
      "All slats are anti-iced"
    ],
    "correct": 1,
    "category": "Ice and rain protection"
  },
  {
    "question": "Which of the following correctly completes the statement? 'VFE NEXT is...",
    "answers": [
      "...an amber equal sign showing the VFE corresponding to the next flap lever position.",
      "...the minimum speed for the present configuration.",
      "...the minimum FLAP/SLAT retraction speed.",
      "...the maximum speed for the present configuration."
    ],
    "correct": 0,
    "category": "Flight controls"
  },
  {
    "question": "Once opened, when do the fuel transfer valves close automatically?",
    "answers": [
      "During the next refueling",
      "When fuel transfer is complete",
      "When the engines are shut down",
      "Manually closed by the refueler"
    ],
    "correct": 0,
    "category": "Engine"
  },
  {
    "question": "The control surfaces are electrically controlled, but are there any that have a mechanical backup?",
    "answers": [
      "Yes, the elevators and ailerons",
      "Yes, the elevators and rudder",
      "Yes, the THS and rudder",
      "No, they all require some electrical power"
    ],
    "correct": 2,
    "category": "Flight controls"
  },
  {
    "question": "After T/O, when does SRS (FMA) change to CLB?",
    "answers": [
      "When the thrust levers are placed in the climb detent.",
      "After SLAT retraction.",
      "When passing acceleration altitude.",
      "When passing thrust reduction altitude."
    ],
    "correct": 2,
    "category": "Auto flight"
  },
  {
    "question": "Regarding the FMA: A/THR in white means it is...",
    "answers": [
      "Disconnected",
      "Armed",
      "Active",
      "Off"
    ],
    "correct": 2,
    "category": "Auto flight"
  },
  {
    "question": "In alpha protection, what does the movement of the sidestick between neutral and fully aft control?",
    "answers": [
      "Angle of Attack (Alpha).",
      "Altitude.",
      "Airspeed.",
      "LOAD FACTOR (G)."
    ],
    "correct": 0,
    "category": "Flight controls"
  },
  {
    "question": "With all the tanks full and the MODE SEL in AUTO, which of the following is correct?",
    "answers": [
      "The center tank pumps will stop when the slats are extended.",
      "The center tank pumps will stop when the flaps are extended.",
      "All pumps will run continuously.",
      "The wing pumps will stop when the slats are extended."
    ],
    "correct": 0,
    "category": "Engine"
  },
  {
    "question": "Approximately how long do the ADIRS take for a full alignment?",
    "answers": [
      "1 minute",
      "3 minutes",
      "7 minutes",
      "10 minutes"
    ],
    "correct": 3,
    "category": "Auto flight"
  },
  {
    "question": "During an engine start sequence there is a grey background on N2 indication which disappears at a certain N2 value. What does this indicate?",
    "answers": [
      "The igniters are no longer being powered",
      "The start valve air pressure has dropped",
      "The start sequence has finished and all engine parameters have stabilized",
      "There is a start fault and a dry crank is in progress"
    ],
    "correct": 2,
    "category": "Engine"
  },
  {
    "question": "At take off (or go around), what is the minimum speed at which the slats may be retracted from CONF 1+F to CONF 0?",
    "answers": [
      "F speed",
      "S speed",
      "Green dot speed",
      "Vls speed"
    ],
    "correct": 1,
    "category": "Flight controls"
  },
  {
    "question": "Which of the following can be tuned by RMP No. 1?",
    "answers": [
      "Any radio communication equipment and any onside radio navigation receivers.",
      "Any radio communication equipment only.",
      "Associated radio navigation equipment, and dedicated radio communication equipment.",
      "VHF 1 and HF 1 only."
    ],
    "correct": 0,
    "category": "Communications"
  },
  {
    "question": "Which of the following color codings is correct for the pushbutton switches?",
    "answers": [
      "AMBER - immediate action: BLUE - temporary operation.",
      "GREEN - temporary operation: WHITE - abnormal position.",
      "WHITE - temporary operation: GREEN - normal operation.",
      "RED - immediate action"
    ],
    "correct": 3,
    "category": "Indicating/recording systems"
  },
  {
    "question": "What does an amber line across the last two digits of the fuel quantity on the fuel page mean?",
    "answers": [
      "There is no fuel in that tank",
      "The fuel in that tank is unusable",
      "That engine is shut down",
      "The fuel quantity indication is inaccurate"
    ],
    "correct": 3,
    "category": "Engine"
  },
  {
    "question": "It is the first flight of the day. Before performing the APU fire test, you have to check that...",
    "answers": [
      "The APU FIRE pb is in and guarded, and the AGENT light is illuminated",
      "The APU FIRE pb is in and guarded, and the APU is running",
      "The red disk APU fire overpressure indicator is not visible on the outside of the aircraft",
      "The APU FIRE pb is in and guarded, and the AGENT light is out"
    ],
    "correct": 3,
    "category": "APU"
  },
  {
    "question": "The flight maneuvering load acceleration limits in clean configuration are -1 g to +2.5 g",
    "answers": [
      "False",
      "True",
      "Only in Alternate Law",
      "Only in Direct Law"
    ],
    "correct": 1,
    "category": "Flight controls"
  },
  {
    "question": "A-LOCK (alpha lock) is annunciated below the Slat/Flap indicator on the E/WD. Which of the following would cause this condition, and how would you recover?",
    "answers": [
      "Flaps are locked in Config 1. To retract Flaps, reduce angle of attack.",
      "Slats and Flaps are locked in Config 1. To retract Slats and Flaps, recycle the Flap lever.",
      "Slats are locked in Config 1 due to high angle of attack. To retract slats, recycle the Flap lever.",
      "Slats are locked in Config 1 due to high angle of attack. To retract the slats, reduce the angle of attack."
    ],
    "correct": 3,
    "category": "Flight controls"
  },
  {
    "question": "Regarding the PFD, which of the following statements is true?",
    "answers": [
      "The bottom left corner of the PFD displays the MACH number at all times.",
      "On the IAS, a split magenta triangle indicates a managed climb.",
      "Selected heading can be displayed as a triangle or digits.",
      "An excessive rate of descent will cause the IVSI to go RED."
    ],
    "correct": 2,
    "category": "Indicating/recording systems"
  },
  {
    "question": "What is the standard way for the flight crew to disengage the autopilot?",
    "answers": [
      "By pressing the takeover pb on the sidestick",
      "By using the AP pb on the FCU",
      "By moving a side stick beyond a given threshold",
      "By applying excessive force to the pitch trim wheel"
    ],
    "correct": 0,
    "category": "Auto flight"
  },
  {
    "question": "On ECAM SD, what does an amber door indication mean?",
    "answers": [
      "The door is fully open",
      "The door is fully closed",
      "The door is not locked",
      "The door is inoperative"
    ],
    "correct": 2,
    "category": "Indicating/recording systems"
  },
  {
    "question": "What is the minimum fuel quantity for takeoff?",
    "answers": [
      "2,400 kg",
      "1,500 kg",
      "15,400 kg",
      "There is no limitation"
    ],
    "correct": 1,
    "category": "Engine"
  },
  {
    "question": "When approaching to land, with FLAPS 3 on a fully serviceable aircraft, what is the correct action on the GPWS panel?",
    "answers": [
      "Switch OFF the SYS switch.",
      "Switch ON the G/S MODE switch.",
      "Switch ON the LDG FLAP 3 switch.",
      "Switch ON the FLAP MODE switch."
    ],
    "correct": 2,
    "category": "Indicating/recording systems"
  },
  {
    "question": "Which of the following correctly completes this statement? 'The MAN V/S CTL switch on the CABIN PRESS panel is...",
    "answers": [
      "...operative at all times, and controls the outflow valve.",
      "...operative in the MAN pressurization mode: -hold up to OPEN the outflow valve.",
      "...operative in the MAN pressurization mode: -hold up to OPEN the safety valve.",
      "...inoperative if the DITCHING switch is ON."
    ],
    "correct": 1,
    "category": "Air systems"
  },
  {
    "question": "From which HYD system is the BRAKE & ACCU PRESS indicator (Triple BRAKE indicator located on the center instrument panel) indicating pressure?",
    "answers": [
      "Green",
      "Yellow",
      "Blue",
      "Amber"
    ],
    "correct": 1,
    "category": "Hydraulics"
  },
  {
    "question": "What is the maximum speed for selecting the gear down (Vlo extension)?",
    "answers": [
      "220 kt",
      "250 kt",
      "280 kt",
      "Green Dot"
    ],
    "correct": 1,
    "category": "Limitations"
  },
  {
    "question": "What is the maximum APU rotor speed (% N on ECAM) above which the APU shuts down automatically?",
    "answers": [
      "100 %.",
      "117 %.",
      "107 %.",
      "97 %."
    ],
    "correct": 2,
    "category": "APU"
  },
  {
    "question": "The message F/CTL FLAPS LOCKED appears on the E/WD. What does it mean?",
    "answers": [
      "Non alignment between 2 flaps has been detected and the flaps are locked in their present position",
      "To reduce stress on the wings during turbulence, the flap movement has been slowed down by the WING TIP BRK",
      "Due to a fault with a flap, the WING TIP BRK has locked it so that the remaining flaps will continue to operate",
      "Due to a fault, a hydraulic device has locked the flaps and slats at their present position"
    ],
    "correct": 0,
    "category": "Flight controls"
  },
  {
    "question": "When set to TA/RA, the TCAS system provides traffic and resolution advice with regard to:",
    "answers": [
      "All other aircraft",
      "Only other transponding aircraft",
      "Only other aircraft on the same ATC frequency",
      "Only other aircraft with the same transponder code"
    ],
    "correct": 1,
    "category": "Indicating/recording systems"
  },
  {
    "question": "What is the function of the GEN 1 LINE pb located on the EMER ELEC PWR panel?",
    "answers": [
      "It inhibits the RAT to allow the slats to extend for landing",
      "GEN 1 line contactor opens. The AC BUS 1 is supplied from GEN 2 through bus tie contactors. This is used during the smoke drill",
      "It allows the RAT to be manually extended",
      "It allows the ILS and the slats/flaps to be connected to the APU battery for the approach"
    ],
    "correct": 1,
    "category": "Electrical"
  },
  {
    "question": "The lavatory and galley areas are ventilated using re-circulated cabin air. How is the system switched on?",
    "answers": [
      "By selecting VENT EXTRACT on the VENTILATION panel",
      "The extraction fan runs continuously when electric power is available",
      "The system is fully automatic, and the fan runs whenever the aircraft is pressurized",
      "The system is fully automatic and is controlled by a weight-on wheels micro-switch on the gear"
    ],
    "correct": 1,
    "category": "Air systems"
  },
  {
    "question": "What is the maximum speed for FLAP 3?",
    "answers": [
      "177 knots",
      "185 knots",
      "200 knots",
      "205 knots"
    ],
    "correct": 1,
    "category": "Limitations"
  },
  {
    "question": "With reference to the engine fire system, which statement is correct?",
    "answers": [
      "All engines have a single fire protection loop",
      "Each engine is equipped with two fire bottles",
      "Each engine has a single fire bottle which is also connected to the other engine",
      "Each fire warning is only shown on the FIRE panel"
    ],
    "correct": 1,
    "category": "Fire protection"
  },
  {
    "question": "What happens in the event of failure of a cabin pressure controller?",
    "answers": [
      "An automatic transfer occurs to the other controller.",
      "Transfer is through manual control.",
      "The pilots must manually select landing elevation.",
      "An emergency descent must be initiated."
    ],
    "correct": 0,
    "category": "Air systems"
  },
  {
    "question": "Regarding an Auto Start, which of the following is correct?",
    "answers": [
      "Loss of the N2 grey (highlight) background signifies start valve closure.",
      "Eng 2 normally uses igniter B.",
      "Loss of the N2 grey (highlight) background signifies end of the start sequence.",
      "Putting the MODE SEL to START closes the bleed valve."
    ],
    "correct": 2,
    "category": "Engine"
  },
  {
    "question": "What is the default situation if electrical control to the Wing Anti-Ice and Engine Anti-Ice is lost?",
    "answers": [
      "Wing Anti-Ice OFF, Engine Anti-Ice ON.",
      "Wing Anti-Ice ON, Engine Anti-Ice OFF.",
      "Both ON.",
      "Both OFF."
    ],
    "correct": 0,
    "category": "Ice and rain protection"
  },
  {
    "question": "At the beginning of the takeoff roll, what will be the condition of the A/THR?",
    "answers": [
      "ACTIVE at 1500 feet AGL.",
      "ACTIVE on selection of TOGA or FLX power.",
      "ARMED on selection of TOGA or FLX power.",
      "ARMED at 80 kts."
    ],
    "correct": 2,
    "category": "Auto flight"
  },
  {
    "question": "In the event of an AC BUS 1 fault, how could the AC ESS BUS be powered?",
    "answers": [
      "It cannot be powered.",
      "It can be powered from AC BUS 2.",
      "It must be powered by the APU.",
      "It will be powered by the emergency generator."
    ],
    "correct": 1,
    "category": "Electrical"
  },
  {
    "question": "What is true about SRS during the takeoff phase?",
    "answers": [
      "SRS mode will provide guidance to maintain V2 + 10 kts (minimum) as a speed reference up to the acceleration altitude",
      "SRS mode is available up to 1500 ft AGL",
      "SRS mode will not engage if TOGA is available",
      "SRS mode is not available"
    ],
    "correct": 0,
    "category": "Auto flight"
  },
  {
    "question": "What happens in the event of SFCC 1 total failure?",
    "answers": [
      "SLATS will be inoperative.",
      "FLAPS will be inoperative.",
      "SLATS and FLAPS will be locked by the Wing Tip Brake.",
      "SLATS and FLAPS will operate at half speed."
    ],
    "correct": 3,
    "category": "Flight controls"
  },
  {
    "question": "Takeoff using FLEX thrust is permitted on contaminated runways...",
    "answers": [
      "Above ISA -5Â°C",
      "False",
      "Only in CONF 1+F",
      "True"
    ],
    "correct": 1,
    "category": "Performance"
  },
  {
    "question": "What happens when the first inner tank level reaches the low level (about 750 Kg)?",
    "answers": [
      "Nothing happens until both inner tanks reach 750 Kg.",
      "Transfer valves on the associated wing will open.",
      "One or both transfer valves in each wing will open.",
      "The center tank pumps will stop."
    ],
    "correct": 2,
    "category": "Engine"
  },
  {
    "question": "Pushing the CABIN CALLS EMER pushbutton switch causes which of the following to occur?",
    "answers": [
      "One high-low chime and a CAPTAIN CALL message in the cabin.",
      "Three high-low chimes, red lights and a PA announcement in the cabin.",
      "Three high-low chimes and pink lights at the cabin area call panels.",
      "One high-low chime and red lights at the cabin area call panels."
    ],
    "correct": 2,
    "category": "Indicating/recording systems"
  },
  {
    "question": "Regarding the ACP, which of the following statements is true?",
    "answers": [
      "The PA TRANSMISSION key operates in the same way at the other transmission keys.",
      "The ON VOICE key enables audio messages to be heard on the loudspeakers.",
      "The RESET key transfers the associated (1 or 2) ACP operation to ACP 3.",
      "The RESET key cancels all CALL lights."
    ],
    "correct": 3,
    "category": "Communications"
  },
  {
    "question": "Regarding the ADIRS panel, which of the following statements is true?",
    "answers": [
      "The ON BAT light illuminates to indicate low battery volts.",
      "Rotating an IR Mode rotary selector to ATT will give attitude indications only.",
      "The IR Mode rotary selectors and the ADR selectors are fully independent.",
      "The IR Mode rotary selectors, when selected to NAV, enable the ADRs"
    ],
    "correct": 3,
    "category": "Navigation"
  },
  {
    "question": "At what cabin altitude will the passenger oxygen masks automatically deploy?",
    "answers": [
      "13,000 +/- 500 ft",
      "10,000 ft",
      "13,000 + 0/-500 ft",
      "14,000 + 250/- 750 ft"
    ],
    "correct": 3,
    "category": "Air systems"
  },
  {
    "question": "The A320 fuselage has:",
    "answers": [
      "Two passenger doors",
      "Four passenger doors and four dedicated emergency exits in the cabin",
      "Three passenger doors and one service door",
      "Two passenger doors and two cabin emergency exits"
    ],
    "correct": 1,
    "category": "Other"
  },
  {
    "question": "During the landing roll, a few seconds after selecting reverse, the amber REV indication changes to green. What does this mean?",
    "answers": [
      "The reversers have been re-stowed",
      "The reverse thrust selection has been acknowledged",
      "The reversers are unlocked",
      "The reversers are now fully deployed"
    ],
    "correct": 3,
    "category": "Engine"
  },
  {
    "question": "What is the default situation if electrical control to the Wing Anti-Ice and Engine Anti-Ice is lost?",
    "answers": [
      "Wing Anti-Ice OFF, Engine Anti-Ice ON.",
      "Wing Anti-Ice ON, Engine Anti-Ice OFF.",
      "Both ON.",
      "Both OFF."
    ],
    "correct": 0,
    "category": "Ice and rain protection"
  },
  {
    "question": "What do amber boxes on a MCDU page indicate?",
    "answers": [
      "An optional data entry",
      "A mandatory data entry",
      "A compulsory reporting point",
      "The waypoint indicated will be overflown"
    ],
    "correct": 1,
    "category": "Navigation"
  },
  {
    "question": "What would cause TCAS: REDUCE RANGE to appear on the ND?",
    "answers": [
      "It will be displayed only for a resolution advisory, and ND range is above 80NM.",
      "It would be displayed when a TA or RA is detected, and the ND is in PLAN mode",
      "It displays when a TA or RA is detected, and the ND range is above 80NM",
      "It displays when a TA or RA is detected, and the ND range is above 40NM"
    ],
    "correct": 3,
    "category": "Indicating/recording systems"
  },
  {
    "question": "Which system/computer provides the reactive windshear detection function?",
    "answers": [
      "ADIRU 1",
      "FAC",
      "The weather radar",
      "SDAC"
    ],
    "correct": 1,
    "category": "Auto flight"
  },
  {
    "question": "When the PACK FLOW selector is positioned to HI, airflow is:",
    "answers": [
      "100% of normal",
      "50% more than normal",
      "80% of normal",
      "120% of normal"
    ],
    "correct": 3,
    "category": "Air systems"
  },
  {
    "question": "On the PFD, what causes the indicated barometric altitude to change colour (digital value)?",
    "answers": [
      "At and below 400RA: the current altitude digits are steady amber",
      "Passing 750ft to go to FCU altitude: The current altitude digits turn steady amber",
      "Below MDA (or the MDH) entered in the MCDU Perf App: The current altitude digits are steady amber",
      "Diverging > 250ft from FCU altitude: The current altitude digits turn steady amber"
    ],
    "correct": 2,
    "category": "Auto flight"
  },
  {
    "question": "Regarding ALPHA FLOOR, which of the following statements is true?",
    "answers": [
      "It is available at all times in flight",
      "It will engage even if the A/THR is switched off.",
      "After activation, A.FLOOR will disengage as soon as the thrust levers are moved by the flight crew",
      "It is only available if the aircraft is in the clean configuration"
    ],
    "correct": 1,
    "category": "Auto flight"
  },
  {
    "question": "After a takeoff in CONFIG 1+F, what would happen if FLAP 0 is not selected as the aircraft accelerates?",
    "answers": [
      "At 210 kt the flaps will automatically retract changing the config from 1+F to 1. This raises the VFE from 215 to 230 kt",
      "At 200 kt the flaps will automatically retract changing the config from 1+F to 1. This raises the VFE from 215 to 230 kt",
      "The flaps will be overstressed as the VFE of 215kt is exceeded",
      "At 230 kt the slats and flaps will automatically retract changing the config from 1+F to 0. This prevents slat/flap overspeed"
    ],
    "correct": 0,
    "category": "Flight controls"
  },
  {
    "question": "What is the cockpit handset typically used for?",
    "answers": [
      "To transmit to ATC via HF",
      "To transmit to ATC via VHF",
      "PA announcements to the cabin only",
      "For PAs and SATCOM"
    ],
    "correct": 2,
    "category": "Communications"
  },
  {
    "question": "Which of the following statements best describes bank angle protection?",
    "answers": [
      "The bank angle limit in flight mode is 67Â°, this reduces to 33Â° while HIGH SPEED protection is active, and 40Â° when HIGH AoA protection is active.",
      "Full sidestick deflection will give a roll rate of 30% and the bank angle will not exceed 67Â°",
      "An input is required on the sidestick to hold any bank attitude. When the sidestick is released the aircraft will automatically roll wings level. Full deflection will give a roll rate of 15% and the bank angle will not exceed 67Â°",
      "Above 33Â° an input on the sidestick will be required to hold the bank attitude. Full deflection will give a roll rate of 15% and the bank angle will not exceed 67Â°"
    ],
    "correct": 3,
    "category": "Flight controls"
  },
  {
    "question": "What impact does a HYD G+Y SYS LO PR alert have on the braking system?",
    "answers": [
      "The system will automatically select alternate brakes without anti-skid, using the brake accumulator only. The accumulator can supply at least 7 full brake applications.",
      "The system will automatically select alternate brakes with anti-skid, using the blue hydraulic system.",
      "The system will automatically select alternate brakes with anti-skid, using the yellow hydraulic system accumulator only. Anti-skid remains available because the BSCU is serviceable.",
      "Normal braking will be lost. To recover brakes, the flight crew must manually select alternate brakes by moving the A/SKID and NW STRG switch to OFF. Up to 7 brake applications will be possible using the braking accumulator."
    ],
    "correct": 2,
    "category": "Hydraulics"
  },
  {
    "question": "How is an armed slide indicated on the DOOR/OXY page?",
    "answers": [
      "The word SLIDE appears in GREEN next to the associated door",
      "The message SLIDES ARMED appears in WHITE under the DOOR/OXY title",
      "The word SLIDE appears in WHITE next to the associated door",
      "No label is seen next to the associated door (if the door was disarmed SLIDE DISARMED would be displayed in AMBER)"
    ],
    "correct": 2,
    "category": "Other"
  },
  {
    "question": "Roll control is provided by:",
    "answers": [
      "Ailerons and spoilers 2, 3 and 4",
      "Ailerons and spoilers 3, 4, and 5",
      "Ailerons and spoilers 2, 3, 4 and 5",
      "Ailerons and spoilers 4 and 5"
    ],
    "correct": 2,
    "category": "Flight controls"
  },
  {
    "question": "Speed brakes are provided by spoilers:",
    "answers": [
      "1, 2, 3, 4",
      "2, 3, 4",
      "2, 3, 4, 5",
      "3, 4, 5"
    ],
    "correct": 1,
    "category": "Flight controls"
  },
  {
    "question": "If AP 2 is engaged, which FMGC is master and controls the A/THR?",
    "answers": [
      "FMGC 1",
      "FMGC 2",
      "Both FMGC always work in parallel and therefore share this task.",
      "A/THR never uses information from the FMGS."
    ],
    "correct": 1,
    "category": "Auto flight"
  },
  {
    "question": "When does the FUEL L (R) WING TK LO LVL ECAM alert trigger?",
    "answers": [
      "When the associated inner fuel tank quantity is below 1,500 kg",
      "When the associated inner fuel tank quantity is below 750 kg",
      "When the combined inner and outer tank quantity on the same wing is below 750 kg",
      "When the combined inner and outer tank quantity on the same wing is below 1,500 kg"
    ],
    "correct": 1,
    "category": "Indicating/recording systems"
  },
  {
    "question": "What is the significance of the triple click aural warning?",
    "answers": [
      "It is used to highlight all FMA mode changes",
      "It indicates a landing capability downgrade, or some cases of mode reversion",
      "It is heard for all mode reversions",
      "Its only purpose is to indicate a landing capability downgrade"
    ],
    "correct": 1,
    "category": "Indicating/recording systems"
  },
  {
    "question": "What is the take-off and go around EGT limit for the CFM engine?",
    "answers": [
      "950Â°C",
      "725Â°C",
      "915Â°C",
      "625Â°C"
    ],
    "correct": 0,
    "category": "Engine"
  },
  {
    "question": "What is the meaning of a BLUE light in a flight deck pushbutton?",
    "answers": [
      "Normal system operation",
      "An abnormal pushbutton position",
      "Normal operation of a system used temporarily",
      "A test result or maintenance information"
    ],
    "correct": 2,
    "category": "Indicating/recording systems"
  },
  {
    "question": "During final approach, when is LAND annunciated on the FMA?",
    "answers": [
      "It engages at MDA, and can be disengaged by setting TOGA thrust",
      "It engages <400 ft RA until approximately 40RA when it is replaced by FLARE. It can be disengaged by pushing the APPR pushbutton on FCU to cancel the approach",
      "It engages at 1,000 ft RA with the aircraft in the Landing Configuration (Flap 3 or Flap FULL)",
      "It engages <400 ft RA until approximately 40RA when it is replaced by FLARE. It can be disengaged by setting TOGA thrust, or by disconnecting both AP and FD"
    ],
    "correct": 3,
    "category": "Auto flight"
  },
  {
    "question": "Where is the LP ground air supply connector located?",
    "answers": [
      "On the left hand side of the fuselage belly fairing, just ahead of the wing leading edge",
      "On the bottom of the fuselage behind the trailing edge of the wing",
      "On the underside of the left hand wing, between the engine pylon and fuselage",
      "On the aft fuselage next to Water Filling and/or Draining service panel"
    ],
    "correct": 0,
    "category": "Air systems"
  },
  {
    "question": "What impact does a single lane failure of ACSC 2 have on the air conditioning system?",
    "answers": [
      "Only PACK 2 flow control valve, and cockpit trim valve close",
      "PACK 2 flow control valve closes, PACK 1 is automatically set to HIGH flow, hot air pressure regulating valve and trim air valves all close",
      "There is no impact: loss of redundancy only",
      "PACK 1 and PACK 2 are automatically set to HIGH flow, hot air pressure regulating valve and trim air valves all close"
    ],
    "correct": 2,
    "category": "Air systems"
  },
  {
    "question": "When does the generator load turn amber on the ELEC SD page?",
    "answers": [
      "The engine generator load is above 105%",
      "The engine generator load is above 100%",
      "The engine generator load is above 108% for more than 10 sec",
      "The engine generator load is above 108%"
    ],
    "correct": 1,
    "category": "Electrical"
  },
  {
    "question": "During a routine flight, which of the following would result after the loss of GEN 2 and the subsequent start of the APU?",
    "answers": [
      "GEN 1 continues to power AC bus 1. The APU powers AC bus 2",
      "All systems return to normal and the RAT must be re-stowed",
      "The APU will power both AC bus 1 and 2",
      "GEN 1 will power both AC bus 1 and 2. The APU generator will remain in standby for redundancy"
    ],
    "correct": 0,
    "category": "Electrical"
  },
  {
    "question": "Which of the following statements is true regarding the APU Fire Extinguishing system (select the most complete answer)?",
    "answers": [
      "3 sec after an APU FIRE warning on the ground, the APU performs an emergency shutdown, and the extinguisher bottle discharges automatically",
      "Immediately after an APU fire warning on the ground, the APU automatically shuts down, and the extinguisher bottle discharges automatically",
      "There are two fire agent bottles for the APU; one is discharged automatically if a fire is detected on the ground, and the other can be discharged by the flight crew at any time",
      "3 sec after a fire warning, the APU automatically shuts down. The flight crew should follow ECAM actions to secure the APU and fire the squib"
    ],
    "correct": 0,
    "category": "Fire protection"
  },
  {
    "question": "What is the significance of a flashing red light on a cabin door?",
    "answers": [
      "It indicates low pressure in the slide inflation cylinder",
      "It flashes red if the door is unlocked when at least one engine is running",
      "The light flashes red if the door control handle is operated, and the slide is armed",
      "It indicates residual cabin pressure. The light flashes red when one or both engines have stopped, the slide has been disarmed and the cabin differential pressure is above 2.5hPa"
    ],
    "correct": 3,
    "category": "Other"
  },
  {
    "question": "If a C/B trips what action should the flight crew take?",
    "answers": [
      "Consult the C/B Tripped procedure in the QRH for guidance. On the ground a C/B can be reengaged on the direction of maintenance. In flight a C/B should not be reengaged under any circumstances.",
      "The C/B can be re-engaged as many times as necessary if required for the safe conduct of the flight.",
      "On the ground any C/B can be re-engaged without consulting maintenance so long as it doesnât have a red colour. In flight a C/B can be re-engaged no more than two times.",
      "Consult the C/B Tripped procedure in the QRH for guidance. On the ground the first step is to contact maintenance to identify the cause. In flight the C/B would not be reengaged unless the captain deems it necessary for the safe continuation of the flight (only one reengagement is permitted)."
    ],
    "correct": 3,
    "category": "Electrical"
  },
  {
    "question": "How can the secondary flight plan be activated in flight?",
    "answers": [
      "When HDG or TRK lateral guidance modes are engaged, select the ACTIVATE SECONDARY prompt on the SEC INDEX page of the MCDU. This prompt will not be available in NAV unless the active leg in the primary and secondary are the same.",
      "The secondary flight plan can only be activated while the NAV mode is engaged. When this condition is met the ACTIVATE SECONDARY prompt will be available on the SEC INDEX page of the MCDU.",
      "Select the ACTIVATE SECONDARY prompt on the SEC INDEX page of the MCDU. This feature is available at all times.",
      "Use the ENABLE ALTN command in the lateral revision page for any waypoint on the flight plan."
    ],
    "correct": 0,
    "category": "Navigation"
  },
  {
    "question": "Which LGCIU normally controls the retraction cycle?",
    "answers": [
      "LGCIU 1 is the master, and LGCIU 2 is the slave if LGCIU 1 fails. LGCIU 2 takes over all functions automatically",
      "LGCIU 1 controls the left hand main and nose gears. LGCIU 2 controls the right hand main gear",
      "One LGCIU controls one complete gear cycle, then switches over automatically to the other LGCIU at the completion of the retraction cycle. It also switches over in the case of failure",
      "LGCIU 1 is the master when either AP is off or AP1 is engaged, otherwise LGCIU 2 is the master"
    ],
    "correct": 2,
    "category": "Landing gear"
  },
  {
    "question": "During an automatic start sequence on the ground when does the ignition start and stop?",
    "answers": [
      "Ignition starts when the MODE selector is set to IGN/START, and stops when N2 is greater than 43%",
      "Ignition starts at 22% N2, and stops when N2 is more than 56%",
      "Ignition starts at an N2 of 16%, and stops when N2 is more than 50%",
      "Ignition starts as soon as the engine MASTER is set to ON, and stops when N2 is more than 50%"
    ],
    "correct": 2,
    "category": "Engine"
  },
  {
    "question": "When the low level sensors detect that the centre tank is empty, the pumps will run for an additional ______ min, and then stop",
    "answers": [
      "10",
      "1",
      "5",
      "2"
    ],
    "correct": 2,
    "category": "Engine"
  },
  {
    "question": "Can you reset an IDG in flight?",
    "answers": [
      "Yes, push and hold the IDG pb until the GEN fault light is no longer illuminated",
      "Yes, but only after contacting maintenance control",
      "Yes, provided the engine is running or windmilling",
      "No. It is not possible"
    ],
    "correct": 3,
    "category": "Electrical"
  },
  {
    "question": "How many fire extinguisher bottles are there for the engines and APU?",
    "answers": [
      "2 bottles for each engine and 1 bottle for the APU",
      "2 bottles shared by both engines and 1 bottle for the APU",
      "1 bottle for each engine and 1 bottle for the APU",
      "2 bottles shared by both engines and 2 bottles for the APU"
    ],
    "correct": 0,
    "category": "Fire protection"
  },
  {
    "question": "Below what height do the FWCâs generate height announcements?",
    "answers": [
      "2,500 ft",
      "3,000 ft",
      "1,500 ft",
      "2,000 ft"
    ],
    "correct": 0,
    "category": "Auto flight"
  },
  {
    "question": "What will happen to the flight guidance modes when the altitude knob is pulled on the FCU?",
    "answers": [
      "OPEN CLIMB or OPEN DESCENT engages depending on selected V/S",
      "The current altitude constraint is cancelled",
      "OPEN CLIMB will always engage",
      "Managed CLIMB or Managed DESCENT engages"
    ],
    "correct": 0,
    "category": "Auto flight"
  },
  {
    "question": "When the ND is set to the PLAN mode, how is the map orientated?",
    "answers": [
      "To true north",
      "Corrected along the flight plan track",
      "To the current true track",
      "To the current magnetic track"
    ],
    "correct": 0,
    "category": "Navigation"
  },
  {
    "question": "What has happened if the ELEC system page appears automatically on the lower ECAM DU, and there are no accompanying ECAM alerts?",
    "answers": [
      "An INDEPENDENT failure has occurred",
      "An ADVISORY has occurred; the drifting parameter will be amber",
      "A PRIMARY failure has occurred",
      "An ADVISORY has occurred; the drifting parameter will be pulsing green"
    ],
    "correct": 1,
    "category": "Indicating/recording systems"
  },
  {
    "question": "If the FO fully deflects the hand wheel while manoeuvring on the ground, what angle will the nose wheel be at?",
    "answers": [
      "95Â°",
      "70Â°",
      "75Â°",
      "80Â°"
    ],
    "correct": 2,
    "category": "Landing gear"
  },
  {
    "question": "The NAV and LOGO switch has two positions, 1 and 2. What is the difference between the two positions?",
    "answers": [
      "Position 2 is for emergency use only",
      "Brightness intensity, where 1 is the brightest",
      "Position 1 is for emergency use only",
      "Position 1 turns on the logo lights and the first set of navigation lights, position 2 turns on the logo lights and the second set of navigation lights"
    ],
    "correct": 3,
    "category": "Other"
  },
  {
    "question": "What impact does selecting engine and or wing anti-ice have on the engines?",
    "answers": [
      "The N1 or EPR limit is automatically increased to maintain the appropriate thrust rating",
      "The N1 or EPR limit is automatically reduced, and the idle N1 or EPR is automatically increased",
      "Engine anti-ice reduces the N1 or EPR limit, wing anti-ice has a negligible effect on the maximum thrust output of the engines",
      "There is no impact on the maximum thrust of the engines"
    ],
    "correct": 1,
    "category": "Engine"
  },
  {
    "question": "What is the maximum altitude that the APU can be used for electrical power?",
    "answers": [
      "39,100 ft",
      "22,500 ft",
      "14,500 ft",
      "Maximum certified altitude"
    ],
    "correct": 3,
    "category": "APU"
  },
  {
    "question": "All communications radios can be controlled:",
    "answers": [
      "From any one of the three radio management panels (RMPs)",
      "From the audio control panels (ACPs)",
      "From RMP 1 and RMP 2 only",
      "By the F/O"
    ],
    "correct": 0,
    "category": "Communications"
  },
  {
    "question": "Select the correct statement about the FIRE detection and fault logic for the ENG and APU (select the most complete answer)",
    "answers": [
      "It is not possible for a Fire Detection Unit (FDU) to distinguish between a loop failure and fire detection",
      "When both fire detection loops are serviceable, a fire warning will be triggered whenever one or more loops detect a fire",
      "Fire detection loops A and B must both detect a fire to trigger a warning. If one of these loops fails, then FIRE detection is lost for the associated ENG/APU. The flight crew will be notified via ECAM",
      "A fire warning is triggered if a break occurs in both fire detection loops within 5 sec of each other (flame effect)."
    ],
    "correct": 3,
    "category": "Fire protection"
  },
  {
    "question": "Is this alert HYD G ENG 1 PUMP LO PR a primary, secondary or independent failure? (PTU is operative, and hydraulic pressures are normal)",
    "answers": [
      "Primary",
      "Secondary",
      "Independent",
      "Both primary and secondary"
    ],
    "correct": 2,
    "category": "Hydraulics"
  },
  {
    "question": "What happens when the landing gear is selected down on approach?",
    "answers": [
      "The WHEEL push button on the ECAM control panel illuminates",
      "If it is not empty, the STATUS page appears on the LOWER ECAM DU",
      "The WHEEL page appears on the LOWER ECAM DU",
      "The STATUS page appears on the LOWER ECAM DU, in all cases"
    ],
    "correct": 2,
    "category": "Landing gear"
  },
  {
    "question": "When is auto-start abort and automatic dry cranking available?",
    "answers": [
      "During any engine start (manual or automatic) on the ground. However when in flight auto start abort is only available during automatic starts",
      "During an automatic engine start in any phase of flight",
      "Auto start abort is available during any automatic start cycle. However the flight crew must consider applying the engine ventilation (dry cranking) procedure following a start abort",
      "During an automatic start on the ground only"
    ],
    "correct": 3,
    "category": "Engine"
  },
  {
    "question": "When will the ground spoilers fully extend?",
    "answers": [
      "If the ground spoilers are armed, the wheel speed exceeds 72 kt and both thrust levers are reset to idle.",
      "When at least one landing gear is on the ground, and both thrust levers are at or below idle",
      "When the speedbrake control lever is set to the FULL position",
      "If the ground spoilers are armed, the wheel speed exceeds 60 kt and both thrust levers are reset to idle"
    ],
    "correct": 0,
    "category": "Flight controls"
  },
  {
    "question": "Which hydraulic system is used for landing gear retraction and extension?",
    "answers": [
      "Green",
      "Blue",
      "Yellow",
      "Green or yellow"
    ],
    "correct": 0,
    "category": "Hydraulics"
  },
  {
    "question": "Select the most complete statement about the APPR pushbutton on the FCU.",
    "answers": [
      "The APPR pushbutton will arm the LOC and G/S modes. Once engaged these approach modes will only disengage in the event of a go-around, or disconnection of AP and FD.",
      "The APPR pushbutton will arm either the LOC and G/S modes or APP NAV and FINAL modes depending on the approach selected in the active F-PLN. These modes can be disarmed or disengaged by pushing the APPR pushbutton again.",
      "The APPR pushbutton will arm the LOC and G/S modes independent of the approach selected in the active F-PLN. The LOC and G/S modes can be disarmed or disengaged by pushing the APPR pushbutton again.",
      "The APPR pushbutton will arm either the LOC and G/S modes or APP NAV and FINAL modes depending on the approach selected in the active F-PLN. Once engaged these approach modes will only disengage in the event of a go-around, or disconnection of AP and FD."
    ],
    "correct": 1,
    "category": "Auto flight"
  },
  {
    "question": "How is an altitude constraint, that the FMGS predicts will not be met, indicated?",
    "answers": [
      "An amber altitude on the MCDU F-PLN page",
      "A message in the MCDU scratchpad",
      "An amber star on the MCDU F-PLN page, and an amber circle around the affected waypoint on the ND",
      "A magenta star on the MCDU CLIMB page, and a magenta circle around the affected waypoint on the ND"
    ],
    "correct": 2,
    "category": "Auto flight"
  },
  {
    "question": "Which of the following AC busses can be powered by the emergency generator?",
    "answers": [
      "AC BUS 2",
      "AC ESS and AC ESS SHED busses",
      "BAT BUS",
      "AC BUS 1"
    ],
    "correct": 1,
    "category": "Electrical"
  },
  {
    "question": "What do two dashes across the last two digits of the fuel quantity indication mean?",
    "answers": [
      "The fuel quantity indicated for every tank is inaccurate",
      "The fuel quantity indicated for every tank is completely unreliable",
      "The fuel quantity indicated is inaccurate for one or more tanks. The FUEL SD page can be used to determine which tanks are affected",
      "The fuel quantity indicated for one or more tanks is completely unreliable. The FUEL SD page can be used to determine which tanks are affected"
    ],
    "correct": 2,
    "category": "Indicating/recording systems"
  },
  {
    "question": "What is the normal voltage and frequency for the AC and DC systems on the A320?",
    "answers": [
      "Single phase AC 115v 400Hz, and 12v DC",
      "3 phase AC 115/200v 400Hz, and 28v DC",
      "3 phase AC 115/200v 50Hz, and 20v DC",
      "Single phase AC 230v 50Hz, and 12v DC"
    ],
    "correct": 1,
    "category": "Electrical"
  },
  {
    "question": "What is the normal operating pressure of the hydraulic systems?",
    "answers": [
      "3000PSI including when powered by the RAT",
      "3000PSI (2500PSI when powered by the RAT)",
      "3000PSI (2500PSI when powered by the RAT or PTU)",
      "2500PSI including when powered by the RAT"
    ],
    "correct": 1,
    "category": "Hydraulics"
  },
  {
    "question": "Where can the battery voltage be checked?",
    "answers": [
      "On the ELEC overhead panel and ECAM ELEC page",
      "On the ECAM ELEC page only",
      "On the ELEC overhead panel only",
      "On the ELEC overhead panel and ECAM E/WD"
    ],
    "correct": 0,
    "category": "Electrical"
  },
  {
    "question": "When all 6 fuel pumps are selected ON (MODE SEL auto), which fuel tank(s) will preferentially feed each engine? (assume that all tanks contain useable fuel)",
    "answers": [
      "Shortly after departure both engines will receive fuel preferentially from the centre tank provided the slats are retracted, and approximately 500kg of fuel has been used in each inner tank",
      "ENG 1 will receive fuel from the left inner tank, and ENG 2 will receive fuel from the right inner tank. When each inner tank is empty, fuel will feed to each engine from the centre tank",
      "If the landing gear is retracted, both engines receive fuel continuously from the centre tank until it runs dry. CTR TK FEEDG (green) memo will be displayed on the EWD",
      "ENG 1 will receive fuel from the left outer tank, and ENG 2 will receive fuel from the right outer tank. When each outer tank reaches approximately 750kg, the transfer valves open allowing fuel to be fed from the inner tanks"
    ],
    "correct": 0,
    "category": "Engine"
  },
  {
    "question": "What impact does a single hydraulic failure have on the slats and flaps?",
    "answers": [
      "The corresponding surfaces will lock",
      "The corresponding surfaces will operate at 2/3 of normal speed",
      "The corresponding surfaces operate at half speed",
      "The slats and flaps operate normally"
    ],
    "correct": 2,
    "category": "Hydraulics"
  },
  {
    "question": "What happens if the EXPED button is pushed when the FCU selected altitude is below the current altitude?",
    "answers": [
      "THR IDLE (if A/THR active) and OP DES engage. The speed becomes managed with a target of 300kt/ M0.78, altitude constraints are disregarded",
      "THR IDLE (if A/THR active) and DES engage. The speed becomes managed with a target of green dot, altitude constraints are obeyed",
      "THR IDLE (if A/THR active) and EXP DES engage. The speed becomes managed with a target of 340kt/ M0.8, altitude constraints are obeyed",
      "THR IDLE (if A/THR active) and EXP DES engage. The speed becomes managed with a target of 340kt/M0.8, altitude constraints are disregarded"
    ],
    "correct": 3,
    "category": "Auto flight"
  },
  {
    "question": "The sidestick is pulled fully aft during a terrain escape manoeuvre. What does this pitch input demand from the flight control computers?",
    "answers": [
      "Initially pitch rate transitioning to an angle of attack demand. If the sidestick is released to neutral, wings level, the system maintains a pitch rate of zero",
      "Load factor, as the angle of attack exceeds alpha prot the pitch trim will be frozen. With the sidestick at neutral, wings level, the system maintains 1g in pitch (corrected for pitch attitude)",
      "Direct stick to elevator deflection demand. The max elevator deflection will be limited to prevent alpha max from being exceeded. If the sidestick is released to neutral the elevator will be centred",
      "Initially load factor transitioning to an angle of attack demand. If the side stick is later released the F/CTRL computers will maintain an AoA equal to alpha prot, until the sidestick is pushed forward"
    ],
    "correct": 3,
    "category": "Flight controls"
  },
  {
    "question": "In normal law, when does flight mode change to the flare mode?",
    "answers": [
      "At 100 ft RA",
      "At 30 ft RA",
      "At 20 ft RA",
      "At 50 ft RA"
    ],
    "correct": 3,
    "category": "Auto flight"
  },
  {
    "question": "The MAINT BUS switch is used to supply only ground services. Where is it located?",
    "answers": [
      "In the overhead panel",
      "There is no such switch on the A320",
      "On the ceiling in the forward galley just outside the flight deck",
      "Behind the co-pilot's seat"
    ],
    "correct": 2,
    "category": "Indicating/recording systems"
  },
  {
    "question": "Cost index = 0 (zero) corresponds to:",
    "answers": [
      "Minimum time",
      "LRC (Long Range Cruise)",
      "Best ratio between the flight time cost and the fuel cost",
      "Minimum fuel consumption (max range)"
    ],
    "correct": 3,
    "category": "Performance"
  },
  {
    "question": "If the Engine Interface Unit (EIU) fails, what information does the FADEC lose access to?",
    "answers": [
      "Engine sensors",
      "Thrust lever angle",
      "Air data from the ADIRS",
      "Master switch, and engine mode selector position"
    ],
    "correct": 3,
    "category": "Engine"
  },
  {
    "question": "Which hydraulic system(s) are used to actuate engine reverser thrust?",
    "answers": [
      "Each engine uses pressurised fuel to actuate the reverser doors",
      "YELLOW for ENG 1, and GREEN for ENG 2",
      "Each engine has its own independent hydraulic system to actuate the reverser doors",
      "GREEN for ENG 1, and YELLOW for ENG 2"
    ],
    "correct": 3,
    "category": "Hydraulics"
  },
  {
    "question": "What is the wingspan of the A320?",
    "answers": [
      "24.8 m",
      "40.5 m",
      "34.1 m",
      "38.1 m"
    ],
    "correct": 2,
    "category": "Limitations"
  },
  {
    "question": "Which busses can be powered from the emergency generator?",
    "answers": [
      "AC ESS and DC ESS via ESS TR only",
      "DC ESS, and AC ESS via the AC ESS FEED only",
      "BAT BUS, AC ESS, AC ESS SHED, DC ESS, DC ESS SHED",
      "DC ESS, DC ESS SHED, AC ESS and AC ESS SHED"
    ],
    "correct": 3,
    "category": "Electrical"
  },
  {
    "question": "For routine access into the cockpit by the cabin crew, the buzzer sounds:",
    "answers": [
      "With a triple high-low chime",
      "Continuously",
      "For a few sec",
      "For a few min"
    ],
    "correct": 2,
    "category": "Indicating/recording systems"
  },
  {
    "question": "If the FWC detects a failure it will trigger an ECAM alert, provided no flight phase inhibition is active. How many flight phases are there?",
    "answers": [
      "6",
      "7",
      "10",
      "8"
    ],
    "correct": 2,
    "category": "Indicating/recording systems"
  },
  {
    "question": "Below what altitude does the vacuum generator produce the necessary pressure differential to force waste from the toilet bowls into the waste storage tank?",
    "answers": [
      "18,000 ft",
      "14,000 ft",
      "16,000 ft",
      "20,000 ft"
    ],
    "correct": 2,
    "category": "Air systems"
  },
  {
    "question": "Select the most complete statement about mechanical backup",
    "answers": [
      "Mechanical backup allows the flight crew to manage a temporary loss of 5 flight control computers. The THS and rudder are mechanically controlled, and hydraulically actuated. MAN PITCH TRIM ONLY (RED) is displayed on the PFD",
      "While in mechanical backup USE MAN PITCH TRIM (RED) is displayed on the PFD, the THS and RUDDER can be actuated mechanically by the pilot",
      "Mechanical backup allows the flight crew to manage a temporary loss of 7 flight control computers. The THS and rudder are mechanically controlled and mechanically actuated. MAN PITCH TRIM ONLY (RED) is displayed on the PFD",
      "If the aircraft finds itself in an abnormal attitude AoB > 125Â°, AoA >40Â°, IAS >440kt, the flight law will transition to mechanical backup and stay in this flight law for the remainder of the flight. USE MAN PITCH TRIM (amber) will be displayed on the PFD"
    ],
    "correct": 0,
    "category": "Flight controls"
  },
  {
    "question": "What areas of the aircraft are anti-iced with hot air?",
    "answers": [
      "Engine air intakes, the three outboard leading edge slats of each wing, the THS and rudder leading edge",
      "Engine air intakes, all leading edge slats on each wing",
      "Engine air intakes, and the three outboard leading edge slats of each wing",
      "Engine air intakes, the four outboard leading edge slats of each wing, and the flight deck windows"
    ],
    "correct": 2,
    "category": "Ice and rain protection"
  },
  {
    "question": "What supporting evidence would you expect to see following an EIS DMC 1(2)(3) FAULT alert?",
    "answers": [
      "PLEASE WAIT displayed on the affected DU(s)",
      "MAP NOT AVAIL displayed on the affected DU(s)",
      "The affected DU(s) will be blank",
      "INVALID DATA displayed on the affected DU(s)"
    ],
    "correct": 3,
    "category": "Indicating/recording systems"
  },
  {
    "question": "Which unit is used as a short-term interface between the flight crew and FMGC?",
    "answers": [
      "ADIRU control panel",
      "FCU",
      "EFIS control panel",
      "MCDU"
    ],
    "correct": 1,
    "category": "Auto flight"
  },
  {
    "question": "Where do the wing anti-ice indications appear on the ECAM screens?",
    "answers": [
      "When selected WING A.ICE appears on the ECAM status page",
      "A white triangle appears on the ECAM bleed page",
      "There are no indications for wing anti-ice on the ECAM screens",
      "When selected ANTI-ICE appears in white on the ECAM bleed page, and the WING A.ICE ECAM memo appears in green on the EWD"
    ],
    "correct": 3,
    "category": "Ice and rain protection"
  },
  {
    "question": "During cruise flight, how are the cockpit panels and avionics compartment cooled?",
    "answers": [
      "The avionics compartment is unpressurised, allowing the avionics to be ventilated using ambient air. The cockpit panels are cooled using air from the air conditioning system",
      "The avionics ventilation system extracts air from the cockpit panels and avionics compartment, and then removes heat using a skin air heat exchanger",
      "The avionics compartment is cooled by the avionics ventilation system, which uses air conditioned air in the closed configuration. The cabin ventilation system extract valve draws ambient cabin air through the cockpit panels, and then overboard via the outflow valve",
      "Both the avionics compartment and cockpit panels are cooled using air from the air conditioning system"
    ],
    "correct": 1,
    "category": "Air systems"
  },
  {
    "question": "If power to the cockpit door fails:",
    "answers": [
      "The evacuation panel in the door is released",
      "The door does not unlock automatically and remains closed",
      "The door unlocks automatically, but remains closed",
      "Power from the emergency bus is automatically routed to the door locks to keep them in place"
    ],
    "correct": 2,
    "category": "Other"
  },
  {
    "question": "What would happen if the APU master switch was turned off immediately following the use of APU bleed?",
    "answers": [
      "APU continues to run for a cooling period of 60 to 120 sec",
      "APU continues to run for a cooling period of 30 to 60 sec",
      "APU shuts down immediately",
      "APU continues to run for a cooling period of 45 to 90 sec"
    ],
    "correct": 0,
    "category": "APU"
  },
  {
    "question": "What protections are available in alternate law?",
    "answers": [
      "Load factor limitation, pitch attitude, bank angle, angle of attack, and high speed",
      "Load factor limitation, pitch attitude, bank angle, low speed, and high speed",
      "Load factor limitation is the only protection available in alternate law. High speed and low speed stabilities may be available",
      "There are no protections in alternate law. High speed and low speed stabilities may be available"
    ],
    "correct": 2,
    "category": "Flight controls"
  },
  {
    "question": "Select the correct statement about the ADIRS panel.",
    "answers": [
      "If an IR is turned off by mistake in flight, it can be recovered provided it is switched back on within 5 min",
      "The ADR and IR parts of an ADIRU cannot not be switched off individually",
      "When securing the aircraft both the IR mode selectors and ADR pushbutton switches should be set to OFF. This is to prevent the aircraft batteries from being drained",
      "The ADR or IR part of an ADIRU can be individually switched OFF using the IR or ADR pushbuttons. Setting the IR Mode Selector to OFF will remove power from the whole ADIRU"
    ],
    "correct": 3,
    "category": "Navigation"
  },
  {
    "question": "Which ACP transmission key will illuminate if the cabin attendants are calling the cockpit?",
    "answers": [
      "CAB",
      "ALERT",
      "VHF3",
      "PA"
    ],
    "correct": 0,
    "category": "Communications"
  },
  {
    "question": "Both ECAM screens have failed. Can the E/WD be displayed on any of the remaining display units?",
    "answers": [
      "Yes, on the PFD",
      "Yes, on the ND",
      "Yes, on the SD",
      "No, it cannot be displayed"
    ],
    "correct": 1,
    "category": "Indicating/recording systems"
  },
  {
    "question": "Where is the flap/slat position displayed?",
    "answers": [
      "On the SD",
      "On both PFDs",
      "On the flap/slat indicator",
      "On the E/WD"
    ],
    "correct": 3,
    "category": "Flight controls"
  },
  {
    "question": "What is the maximum speed (VFE) with CONF 1+F for the A320?",
    "answers": [
      "215 kt",
      "230 kt",
      "185 kt",
      "177 kt"
    ],
    "correct": 0,
    "category": "Limitations"
  },
  {
    "question": "What are the minimum and maximum cabin differential pressure limits?",
    "answers": [
      "+9 to -1 PSI",
      "+8.6 to -1 PSI",
      "+8.5 to -0.4 PSI",
      "+8.5 to -1 PSI"
    ],
    "correct": 0,
    "category": "Limitations"
  },
  {
    "question": "What is VMO/MMO for the A320?",
    "answers": [
      "380/0.8",
      "350/0.82",
      "320/0.82",
      "320/0.77"
    ],
    "correct": 1,
    "category": "Limitations"
  },
  {
    "question": "How long can you remain in TOGA thrust?",
    "answers": [
      "10 min during single engine operations",
      "10 min during two engine operations",
      "Unlimited time",
      "5 min during single engine operations"
    ],
    "correct": 0,
    "category": "Engine"
  },
  {
    "question": "What is the maximum speed with the landing gear extended (VLE)?",
    "answers": [
      "220 kt",
      "260 kt",
      "280 kt",
      "250 kt"
    ],
    "correct": 2,
    "category": "Limitations"
  },
  {
    "question": "Which of the following statements regarding LP ground air limitations is true?",
    "answers": [
      "LP air and the packs must not be used at the same time",
      "Before connecting LP air ENG 1+2 bleed must be OFF, and X BLEED set to OPEN",
      "LP air can be used to supplement the cooling air from the packs",
      "LP air and APU bleed must not be used at the same time"
    ],
    "correct": 0,
    "category": "Air systems"
  },
  {
    "question": "What is the cabin pressure safety relief valve setting?",
    "answers": [
      "9PSI",
      "8.4PSI",
      "8.5PSI",
      "8.6PSI"
    ],
    "correct": 3,
    "category": "Limitations"
  },
  {
    "question": "What is the maximum demonstrated crosswind for the A320?",
    "answers": [
      "38 kt (gusts included)",
      "36 kt (gusts included)",
      "36 kt (mean wind)",
      "38 kt (mean wind)"
    ],
    "correct": 0,
    "category": "Limitations"
  },
  {
    "question": "What is the maximum speed at which the landing gear may be retracted (VLO retraction)?",
    "answers": [
      "250 kt",
      "260 kt",
      "280 kt",
      "220 kt"
    ],
    "correct": 3,
    "category": "Limitations"
  },
  {
    "question": "Which of the following statements best describes high speed protection?",
    "answers": [
      "High speed protection is 1 of 5 protections in normal law, and is the only protection available in alternate law",
      "High speed protection will activate at VMO + 16 kt / MMO + 0.04, a permanent nose-up order is applied to aid recovery back towards normal flight conditions. The airspeed will settle at or below VMO even with full forward sidestick input",
      "High speed protection will not allow the aircraft to overshoot VMO/MMO unless forward sidestick input is applied. In this case the airspeed will never exceed VMO+16 / MMO + 0.04. When the sidestick is released the bank angle is maintained, the maximum AoB is reduced to 45Â°",
      "High speed protection is activated at or above VMO/MMO (depending on the flight conditions), a permanent nose-up order is applied to aid recovery back towards normal flight conditions. With no sidestick input the aircraft will not to wings level, and the maximum bank angle is reduced to 40Â°"
    ],
    "correct": 3,
    "category": "Auto flight"
  },
  {
    "question": "If both autopilots are engaged, which FMGC is master and controls the A/THR?",
    "answers": [
      "FMGC 1 if FD 1 is ON and FD2 is OFF",
      "FMGC 2 if FD 2 is ON and FD 1 is OFF",
      "FMGC 1",
      "FMGC 2"
    ],
    "correct": 2,
    "category": "Auto flight"
  },
  {
    "question": "What colour will the secondary flight plan be when it is displayed on the ND?",
    "answers": [
      "Green",
      "White",
      "Blue",
      "Amber"
    ],
    "correct": 1,
    "category": "Flight controls"
  },
  {
    "question": "What does a green arrow on the bottom of the ECAM status page indicate?",
    "answers": [
      "It means the ECAM has been completed",
      "It indicates a system page needs to be reviewed",
      "It is a reminder to complete the approach preparation procedures",
      "It is displayed if the data on the status page has overflowed off the screen"
    ],
    "correct": 3,
    "category": "Indicating/recording systems"
  },
  {
    "question": "Only ______ is functional in the emergency electrical configuration:",
    "answers": [
      "RMP 1 and 3",
      "RMP 1 AND 2",
      "RMP 1",
      "RMP 3"
    ],
    "correct": 2,
    "category": "Communications"
  },
  {
    "question": "Which units make up the Flight Management Guidance System (FMGS)?",
    "answers": [
      "2 x FMGC, 2 x MCDU, and 2 x FCU only",
      "2 x FMC, 2 x AP, 1 x A/THR, 2 x MCDU, 2 x FCU, and 2 x FAC",
      "2 x FMGC, 2 x MCDU, 1 x FCU, and 2 x FAC",
      "2 x FMGC, 2 x MCDU, and 1 x FCU only"
    ],
    "correct": 2,
    "category": "Auto flight"
  },
  {
    "question": "How is the outflow valve actuated?",
    "answers": [
      "Three electric motors, all automatic",
      "One electric motor, controlled by either CPC 1, CPC 2 or via the MAN VIS CTL switch",
      "One of three electric motors Two automatic, one manual",
      "One of two electric motors One automatic, one manual"
    ],
    "correct": 2,
    "category": "Air systems"
  },
  {
    "question": "When will the PTU pushbutton FAULT (amber) light illuminate?",
    "answers": [
      "When there is a PTU overheat",
      "To indicate that the PTU is inhibited",
      "When there is an overheat, low air pressure or low fluid level in either green or yellow reservoirs",
      "If the pressure difference between the green and yellow hydraulic systems exceeds 750 PSI"
    ],
    "correct": 2,
    "category": "Hydraulics"
  },
  {
    "question": "Which compartments are unpressurised?",
    "answers": [
      "Nose gear bay, main gear bay, the tail cone, and bulk cargo compartment",
      "Nose gear, main gear bay and the battery compartment",
      "Avionics bay, nose gear bay, air conditioning compartment, main gear bay and the tail cone",
      "Radome, nose gear bay, main gear bay, air conditioning compartment, and the tail cone"
    ],
    "correct": 3,
    "category": "Air systems"
  },
  {
    "question": "Select the correct starter limitation for the CFM engine:",
    "answers": [
      "A 15 minute cooling period is required following 4 failed start cycles",
      "A 20 minute cooling period is required following 3 failed start cycles",
      "A 60 minute cooling period is required following 3 consecutive start attempts",
      "A 10 second pause is required between each start cycle"
    ],
    "correct": 0,
    "category": "Engine"
  },
  {
    "question": "Regarding speed symbols on the PFD, which statement is true?",
    "answers": [
      "The yellow speed trend arrow indicates the speed the aircraft will reach in 15 sec",
      "Managed speed is represented by a magenta speed bug",
      "Selected speed is represented by a magenta speed bug",
      "Mach No. is not displayed below 0.6"
    ],
    "correct": 1,
    "category": "Indicating/recording systems"
  },
  {
    "question": "What has happened if the ELEC system page appears automatically on the lower ECAM DU, and there are no accompanying ECAM alerts?",
    "answers": [
      "A PRIMARY failure has occurred",
      "An ADVISORY has occurred; the drifting parameter will be amber",
      "An ADVISORY has occurred; the drifting parameter will be pulsing green",
      "An INDEPENDENT failure has occurred"
    ],
    "correct": 1,
    "category": "Indicating/recording systems"
  },
  {
    "question": "What information is always available on the permanent data section of the SD?",
    "answers": [
      "G LOAD",
      "Gross weight",
      "Metric altitude",
      "TAT (Total Air Temperature)"
    ],
    "correct": 3,
    "category": "Indicating/recording systems"
  },
  {
    "question": "What impact does a FWS FWC 1+2 FAULT have?",
    "answers": [
      "All SD pages except for the status page are lost",
      "Most ECAM cautions and warnings are lost. Rural warnings (i.e., stall and over speed) remain available",
      "All ECAM warnings are lost, amber ECAM cautions and the status page remains available",
      "All ECAM cautions and warnings, rural warnings, master caution and master warning lights are lost"
    ],
    "correct": 3,
    "category": "Fire protection"
  },
  {
    "question": "What is the function of the landing gear SAFETY VALVE?",
    "answers": [
      "The safety valve prevents the landing gear from extending too quickly causing damage to the down locks",
      "When the aircraft is flying faster than 250 kt the safety valve automatically cuts off hydraulic supply to the landing gear system",
      "When the aircraft is flying faster than 260 kt the safety valve automatically cuts off hydraulic supply to the landing gear system",
      "The safety valves prevents the landing gear from being hydraulically supplied on the ground The valve opens pressurising the landing gear as soon as the aircraft leaves the ground"
    ],
    "correct": 2,
    "category": "Landing gear"
  },
  {
    "question": "Typically when will direct law be active?",
    "answers": [
      "Significant system failures (i.e., EEC) will typically reconfigure the flight law directly from normal to direct law, regardless of configuration",
      "Direct law is the flare mode for alternate law. Alternate reconfigures to direct law when the landing gear is extended",
      "Direct law is the flare mode for normal law. Normal law blends into direct law at 50 ft radio altitude",
      "Direct law is only available on the ground, and transitions into normal law during the first 5 sec after liftoff"
    ],
    "correct": 1,
    "category": "Flight controls"
  },
  {
    "question": "Regarding an autoland approach, with both autopilots engaged, which FMGC is master?",
    "answers": [
      "Both",
      "FMGC 2",
      "Neither",
      "FMGC 1"
    ],
    "correct": 3,
    "category": "Auto flight"
  },
  {
    "question": "When opened in an emergency, the passenger entry doors:",
    "answers": [
      "Are electrically assisted into the open position",
      "Will need two cabin crew to push them open",
      "Will be driven open automatically by a damper actuator when the door control handle is lifted, and the door is armed",
      "Are assisted to the open position by slide inflation"
    ],
    "correct": 2,
    "category": "Other"
  },
  {
    "question": "ALPHA-FLOOR is available from:",
    "answers": [
      "Liftoff until touchdown",
      "Liftoff until the aircraft reaches 100 ft RA on approach",
      "Slat retraction until 100ft RA in approach",
      "Slat retraction until landing gear extension"
    ],
    "correct": 1,
    "category": "Auto flight"
  },
  {
    "question": "How can armed FMA modes be identified on the PFD?",
    "answers": [
      "Armed FMA modes are displayed in blue (selected) or green (managed)",
      "Armed FMA modes are displayed in magenta (selected) or blue (managed)",
      "Armed FMA modes are displayed in blue (selected) or magenta (managed)",
      "Armed FMA modes are displayed in blue (selected) or white (managed)"
    ],
    "correct": 2,
    "category": "Auto flight"
  },
  {
    "question": "Which valves can the flight crew control via the ENG1 (ENG2) MASTER switches?",
    "answers": [
      "LP fuel shutoff valve only",
      "Hydraulic fire shutoff, LP and HP fuel shut-off valves",
      "HP fuel shutoff valve only",
      "LP and HP fuel shutoff valves"
    ],
    "correct": 3,
    "category": "Engine"
  },
  {
    "question": "What is cost index (CI)?",
    "answers": [
      "The ratio of fuel cost (CF) to flight time cost (CT)",
      "The ratio of engine wear cost (CE) to fuel cost (CF)",
      "Fuel cost (CF)",
      "The ratio of flight time cost (CT) to fuel cost (CF)"
    ],
    "correct": 3,
    "category": "Other"
  },
  {
    "question": "When will the SEL light illuminate on each RMP?",
    "answers": [
      "If VHF1 is tuned by RMP2, the SEL light will be illuminated on all RMPs",
      "If the NAV pushbutton has been selected, the SEL light will be illuminated on all RMPs",
      "If VHF1 is tuned by RMP2, the SEL light will be illuminated on RMP1 and RMP2 only",
      "If the NAV pushbutton has been selected, the SEL light will be illuminated on RMP1 and RMP2 only"
    ],
    "correct": 2,
    "category": "Communications"
  },
  {
    "question": "Select the correct statement about the ADIRS panel.",
    "answers": [
      "The ADR and IR parts of an ADIRU cannot not be switched off individually",
      "When securing the aircraft both the IR mode selectors and ADR pushbutton switches should be set to OFF. This is to prevent the aircraft batteries from being drained",
      "If an IR is turned off by mistake in flight, it can be recovered provided it is switched back on within 5 min",
      "The ADR or IR part of an ADIRU can be individually switched OFF using the IR or ADR pushbuttons. Setting the IR Mode Selector to OFF will remove power from the whole ADIRU"
    ],
    "correct": 3,
    "category": "Navigation"
  },
  {
    "question": "The FAULT (amber) light is illuminated in the ENG 1 pump pushbutton, when will this light extinguish?",
    "answers": [
      "When the pushbutton is selected OFF for all cases excluding reservoir low air pressure",
      "The FAULT light will remain illuminated as long as the fault condition remains (low pressure, low level, etc.), regardless of the pushbutton position",
      "When the pushbutton is selected OFF for all cases",
      "When the pushbutton is selected OFF for all cases excluding reservoir overheat. The FAULT light will remain on as long as the overheat lasts"
    ],
    "correct": 3,
    "category": "Engine"
  },
  {
    "question": "How is a temporary flight plan indicated on the ND?",
    "answers": [
      "A solid amber line",
      "A dashed yellow line",
      "A solid blue line",
      "A dotted magenta line"
    ],
    "correct": 1,
    "category": "Navigation"
  },
  {
    "question": "Where do the wing anti-ice indications appear on the ECAM screens?",
    "answers": [
      "When selected ANTI-ICE appears in white on the ECAM bleed page, and the WING A.ICE ECAM memo appears in green on the EWD",
      "When selected WING A.ICE appears on the ECAM status page",
      "There are no indications for wing anti-ice on the ECAM screens",
      "A white triangle appears on the ECAM bleed page"
    ],
    "correct": 0,
    "category": "Ice and rain protection"
  },
  {
    "question": "What speed will the FMGS use in an expedite climb?",
    "answers": [
      "The largest speed is Green Dot, which is maintained with pitch control",
      "200 kt below 10,000 ft",
      "ECON climb speed",
      "250 kt/ M0.76 kt above 10,000 ft"
    ],
    "correct": 0,
    "category": "Auto flight"
  },
  {
    "question": "Above what cabin altitude will the cabin oxygen masks be deploy automatically?",
    "answers": [
      "12,000 ft",
      "16,000 ft",
      "9,550 ft",
      "14,000 ft"
    ],
    "correct": 3,
    "category": "Air systems"
  },
  {
    "question": "Is it possible to parallel AC generators on the same BUS?",
    "answers": [
      "Only with the RAT deployed",
      "Only one engine generator may be paralleled with the APU",
      "Yes",
      "The electrical system will not allow paralleling of generators"
    ],
    "correct": 3,
    "category": "Electrical"
  },
  {
    "question": "How many flight control computers are there?",
    "answers": [
      "7: 3 x ELACs, 2 x SECs, 2 x FACs",
      "5: 2 x ELACs, 3 x SECs",
      "8: 3 x ELACs, 3 x SECs, 2 x FACs",
      "7: 2 x ELACs, 3 x SECs, 2 x FACs"
    ],
    "correct": 3,
    "category": "Flight controls"
  },
  {
    "question": "Which statement about the FAC is true?",
    "answers": [
      "When the AP is engaged, the rudder trim knob is inoperative, and the master FMGC sends rudder trim orders to the FACs. In addition the FAC flight envelope function performs the alpha protection in normal law",
      "When the AP is engaged, the rudder trim knob is inoperative, and the master FMGC sends rudder trim orders to the FACs. In addition the FAC flight envelope function will automatically select the A-FLOOR A/THR mode, when the conditions for its activation are met",
      "The FAC is a flight control computer, and does not form part of the FMGS",
      "When the AP is engaged the master FMGC sends rudder trim orders to the FACs. The FACs sole purpose are to provide yaw damping, rudder trim and rudder travel limitation functions"
    ],
    "correct": 1,
    "category": "Flight controls"
  },
  {
    "question": "How do you adjust the brightness of the FCU displays?",
    "answers": [
      "On the MCDU",
      "Using the rotary knobs located beneath the FCU",
      "Using the INTEG LT rotary switch",
      "Using the FLOOD LT rotary switch"
    ],
    "correct": 1,
    "category": "Other"
  },
  {
    "question": "After engine start, which MCDU page should be used to modify ZFW and ZFWCG?",
    "answers": [
      "Fuel Predictions page (FUEL PRED)",
      "Progress page (PROG)",
      "INIT B",
      "T/O Performance page (PERF)"
    ],
    "correct": 0,
    "category": "Engine"
  },
  {
    "question": "During cockpit preparation, what is the significance of an amber half box around the oxygen pressure indication on the DOOR/OXY page?",
    "answers": [
      "The cockpit oxygen pressure has dropped below 800PSI, this is a no dispatch.",
      "The pressure in the oxygen bottle is less than 1500PSI. Refer to the limitations section of the FCOM to determine whether the remaining quantity is not below the minimum for the number of occupants in the flight deck.",
      "The pressure in the oxygen bottle is less than 1000PSI, call engineering to have the oxygen bottle replaced before departure.",
      "The oxygen pressure in the low pressure circuit is low (60PSI)"
    ],
    "correct": 1,
    "category": "Air systems"
  },
  {
    "question": "What are the two main functions of the FMGC?",
    "answers": [
      "Flight management and flight guidance",
      "Flight management and flight envelope protection",
      "Flight guidance and flight envelope protection",
      "Flight management and yaw axis control"
    ],
    "correct": 0,
    "category": "Auto flight"
  },
  {
    "question": "Which of the following statements regarding the FWC, ELAC and FAC is true (select the most complete answer)?",
    "answers": [
      "The FWC generates the OVERSPEED warnings, the ELAC performs the HIGH SPEED protection, and the FAC computes and displays characteristic speeds on the PFD",
      "The FWC computes and displays the characteristic speed on the PFD, the ELAC performs the A.FLOOR protection, and the FAC is only active when the AP is engaged",
      "The FWC generates the OVERSPEED warnings, the ELAC performs the HIGH SPEED protection, and the FAC only performs yaw related functions (rudder trim/limits/damping)",
      "The FWC generates the OVERSPEED warnings, the ELAC performs the LOW SPEED protection, and the FAC only performs yaw related functions (rudder trim/limits/damping)"
    ],
    "correct": 0,
    "category": "Auto flight"
  },
  {
    "question": "How can the flight crew dry crank an engine?",
    "answers": [
      "Dry cranking (engine ventilation) is always performed automatically by the FADEC when the residual EGT temperature is too high",
      "Set the MODE selector to CRANK, and the MASTER switch to ON.",
      "Set the MODE selector to CRANK, and the MAN START push button to ON",
      "Leave the MODE selector in IGN/START, confirm that the MASTER switch is OFF, and set the MAN START push button to ON"
    ],
    "correct": 2,
    "category": "Engine"
  },
  {
    "question": "What is the max continuous thrust EGT limit for the CFM engine?",
    "answers": [
      "950Â°C",
      "725Â°C",
      "625Â°C",
      "915Â°C"
    ],
    "correct": 3,
    "category": "Limitations"
  },
  {
    "question": "Which flight control computers receive inputs from the sidestick?",
    "answers": [
      "ELAC, SEC and FAC",
      "ELAC and SEC",
      "SEC only",
      "ELAC only"
    ],
    "correct": 1,
    "category": "Flight controls"
  },
  {
    "question": "Select the correct statement about the ADIRS panel.",
    "answers": [
      "The ADR and IR parts of an ADIRU cannot not be switched off individually",
      "When securing the aircraft both the IR mode selectors and ADR pushbutton switches should be set to OFF. This is to prevent the aircraft batteries from being drained",
      "The ADR or IR part of an ADIRU can be individually switched OFF using the IR or ADR pushbutton. Setting the IR Mode Selector to OFF will remove power from the whole ADIRU",
      "If an IR is turned off by mistake in flight, it can be recovered provided it is switched back on within 5 min"
    ],
    "correct": 2,
    "category": "Navigation"
  },
  {
    "question": "Which of the following statements best describes the operation of the fuel transfer valve(s)?",
    "answers": [
      "The transfer valve can be used to balance the fuel",
      "When a low fuel level is sensed in an inner tank (< 750 kg), one transfer valve will open in the associated wing only",
      "When a low fuel level is sensed in an inner tank (< 750 kg), one transfer valve will open in each wing",
      "The transfer valves will not open until the total fuel on board reaches 1,500 kg"
    ],
    "correct": 2,
    "category": "Engine"
  },
  {
    "question": "What happens to the avionics ventilation system if both the BLOWER and EXTRACT push buttons are set to override?",
    "answers": [
      "The closed configuration is selected, both fans remain running, and air conditioned air is added to the system",
      "Intermediate configuration is selected manually, and the avionics compartment is isolated from the air conditioning system",
      "Air conditioned air will enter the system, and the skin air outlet door will fully open, both fans will continue to run",
      "The smoke configuration will be selected. Air conditioned air will enter the system, and all of the extracted air is dumped overboard (via a small flap on the skin air outlet door). The Blower Fan stops."
    ],
    "correct": 3,
    "category": "Navigation"
  },
  {
    "question": "Which of the following statements best describe a level 3 ECAM alert?",
    "answers": [
      "A steady red master warning light, a red warning message on the E/WD, automatic call of the relevant system page, and a CRC, specific sound or synthetic voice",
      "A flashing red master warning light, a red warning message on the E/WD, automatic call of the relevant system page, and a CRC, specific sound or synthetic voice",
      "A steady amber master caution light, an amber caution message on the E/WD, automatic call of the relevant system page, but no aural sound",
      "A steady amber master caution light, an amber caution message on the E/WD, automatic call of the relevant system page, and a single chime"
    ],
    "correct": 1,
    "category": "Indicating/recording systems"
  },
  {
    "question": "What impact does a CAB PR SYS 1+2 FAULT alert have?",
    "answers": [
      "The pressurisation system will automatically select manual mode. The flight crew can take immediate control of the outflow valve using the MAN V/S CTL switch",
      "Both cabin pressure controllers have failed. The flight crew will set the MODE SEL push button to MAN and adjust the position of the outflow valve as required.",
      "Control of the outflow valve has been lost. The flight crew should begin a normal descent to FL100/MEA, but also be prepared to initiate an emergency descent if required.",
      "Both cabin pressure controllers have failed, the flight crew will need to immediately initiate an emergency descent"
    ],
    "correct": 1,
    "category": "Air systems"
  },
  {
    "question": "During a single engine taxi, engine 1 is running and engine 2 is off. What happens when the ENG MODE selector is moved from NORM to IGN/START?",
    "answers": [
      "The engine 2 FADEC is powered ready for engine start only.",
      "The ENG SD page appears, the engine 2 FADEC is powered (amber crosses disappear for engine parameters), and the pack valves close. Continuous ignition for engine 1 has been manually selected.",
      "There will be no impact to engine 2 because its FADEC is already powered by the aircraft electrical system, and the SD page will already be displayed. Continuous ignition, using one igniter (A or B), will be selected for engine 1.",
      "Continuous ignition, using both ignitors (A+B), will be selected for both engines"
    ],
    "correct": 1,
    "category": "Engine"
  },
  {
    "question": "All flight control surfaces are:",
    "answers": [
      "Hydraulically controlled",
      "Mechanically actuated",
      "Mechanically controlled",
      "Hydraulically actuated"
    ],
    "correct": 3,
    "category": "Flight controls"
  },
  {
    "question": "The thrust levers are moved to the TOGA detent during takeoff. Which configuration would you expect the avionics ventilation system to select if the OAT is 40Â°C?",
    "answers": [
      "Closed",
      "Normal",
      "Intermediate",
      "Open"
    ],
    "correct": 0,
    "category": "Air systems"
  },
  {
    "question": "If the upper ECAM DU fails, or is switched off, how can a system or status page be displayed for review?",
    "answers": [
      "Use the EIS DMC rotary selector to put the SD on the Captainâs PFD DU",
      "Pushing and holding the RCL push button on the ECAM control panel will cycle through each system page",
      "Pushing and holding the desired system page push button on the ECP will replace the E/WD with the selected system page. Upon releasing the button, the E/WD will return",
      "A momentary press on the associated system page push button on the ECP will toggle between the E/WD, and the selected system page on the lower ECAM DU"
    ],
    "correct": 2,
    "category": "Indicating/recording systems"
  },
  {
    "question": "In which configuration will green dot be displayed on the PFD?",
    "answers": [
      "All answers are correct",
      "CONF 1+F",
      "CONF 1",
      "Clean configuration"
    ],
    "correct": 3,
    "category": "Flight controls"
  },
  {
    "question": "Which computer generates amber cautions?",
    "answers": [
      "DU",
      "FWC",
      "DMC",
      "SDAC"
    ],
    "correct": 1,
    "category": "Indicating/recording systems"
  },
  {
    "question": "How many channels does a SFCC have?",
    "answers": [
      "2 channels: 1 SLAT and 1 FLAP",
      "SFCC 1 contains 2 SLAT channels, SFCC 2 contains 2 FLAP channels",
      "4 channels: 2 SLAT and 2 FLAP",
      "2 identical channels for redundancy"
    ],
    "correct": 0,
    "category": "Flight controls"
  },
  {
    "question": "When is T.O. INHIBIT displayed on the EWD?",
    "answers": [
      "1st engine started to 80 kt (phases 2 and 3)",
      "800 ft to 80 kt (phases 7 and 8)",
      "First engine to takeoff power to 1,500 ft (phases 3, 4 and 5)",
      "1st eng to takeoff power to 800 ft (phases 3, 4 and 6)"
    ],
    "correct": 0,
    "category": "Indicating/recording systems"
  },
  {
    "question": "What impact does a CAB PR SYS 1 FAULT alert have?",
    "answers": [
      "If CPC 1 was active at the time of the failure, CPC 2 will need to be selected manually by the flight crew",
      "The outflow valve will operate at half speed",
      "If CPC 1 was active at the time of the failure, CPC 2 will take over automatically. This alert is for crew awareness only (Level 1 ECAM alert)",
      "The pressurisation system will be operating in semi-automatic mode. The flight crew must adjust the target landing elevation using the LDG ELEV rotary knob on the CABIN PRESS panel."
    ],
    "correct": 0,
    "category": "Air systems"
  },
  {
    "question": "How is the outflow valve actuated?",
    "answers": [
      "One electric motor, controlled by either CPC 1, CPC 2 or via the MAN V/S CTL switch",
      "One of two electric motors One automatic, one manual",
      "One of three electric motors Two automatic, one manual",
      "Three electric motors, all automatic"
    ],
    "correct": 2,
    "category": "Air systems"
  },
  {
    "question": "When will the approach phase activate?",
    "answers": [
      "At the FAF altitude when on a precision approach",
      "Automatically when overflying the DECEL pseudo waypoint with NAV, LOC* or LOC engaged. It can also be manually activated by selecting ACTIVATE APPR PHASE on the PERF page",
      "Automatically when approx 15 NM from arrival aerodrome in any flight guidance mode",
      "It can only be manually selected on the MCDU PERF page by either pilot"
    ],
    "correct": 1,
    "category": "Auto flight"
  },
  {
    "question": "Can wing anti-ice be used when one engine is inoperative?",
    "answers": [
      "Yes, provided the x-bleed is selected open, one pack is selected off and the fire push button has not been pushed",
      "Yes, APU bleed air can be used for wing anti-ice",
      "No. It is not possible for one engine bleed to supply air to both wings for anti-icing",
      "Yes, the crossbleed will automatically open after the wing anti-ice has been selected ON"
    ],
    "correct": 0,
    "category": "Ice and rain protection"
  },
  {
    "question": "How many independent channels are there in a Flight Augmentation Computer?",
    "answers": [
      "4 channels: Yaw damper, rudder trim, rudder travel limit, and flight envelope",
      "3 channels: Yaw damper, rudder trim and rudder travel limit",
      "2 channels: Yaw damper and rudder trim",
      "2 identical channels for redundancy"
    ],
    "correct": 0,
    "category": "Flight controls"
  },
  {
    "question": "When will the autobrake system activate following a rejected takeoff?",
    "answers": [
      "Manually extending the speed brake lever immediately after setting the thrust levers to idle will activate the autobrake",
      "The autobrake will activate as soon as both thrust levers are brought back to the idle detent, and the wheel speed is above 40 kt",
      "The command for ground spoiler deployment from the SECs (wheel speed > 72 kt) will activate the autobrake",
      "The autobrake will activate when reverse thrust is selected on a least one thrust lever, and the wheel speed is above 40 kt"
    ],
    "correct": 2,
    "category": "Landing gear"
  },
  {
    "question": "When will the FADEC select the modulated idle mode?",
    "answers": [
      "Whenever the flaps are retracted (FLAPS at zero position)",
      "When flaps are retracted in flight, or on the ground provided reverse is not selected",
      "In flight when the flap lever is not at the zero position",
      "Whenever the thrust lever is in the REV IDLE position"
    ],
    "correct": 1,
    "category": "Engine"
  },
  {
    "question": "Which DMCs can receive information from ADIRU 3?",
    "answers": [
      "DMC 1 or 3. Following the failure of ADIRU1, ADIRU3 will automatically connect to the Captainâs PFD",
      "DMC 1, 2 and 3. However only air data can supplied by ADIRU3 to DMC 1 and 2",
      "DMC 1, 2; or 3 depending on the configuration of the ATT HDG and AIR DATA rotary selectors on the switching panel",
      "DMC 3 only The EIS DMC selector on the switching-panel, can be used to display ADIRU 3 data via DMC 3 on either the CAPT or FO PFD"
    ],
    "correct": 2,
    "category": "Navigation"
  },
  {
    "question": "Which computer controls all datalink communications between the aircraft and the ground (Airline and or ATC)?",
    "answers": [
      "RMP",
      "FMGC",
      "MCDU",
      "ATSU"
    ],
    "correct": 3,
    "category": "Navigation"
  },
  {
    "question": "After an ND failure, which of the following statements is correct?",
    "answers": [
      "The ND is lost on that side of the aircraft",
      "The ND can be manually transferred to the PFD",
      "The ND cannot be manually transferred to the PFD",
      "The ND will automatically transfer to the PFD"
    ],
    "correct": 1,
    "category": "Indicating/recording systems"
  },
  {
    "question": "The Air Conditioning System Controller 1 (ACSC 1):",
    "answers": [
      "Regulates both the cockpit, and the two cabin zones temperature",
      "Regulates cockpit, cabin and cargo compartment zone temperatures",
      "Is the primary controller",
      "Regulates the cockpit temperature"
    ],
    "correct": 3,
    "category": "Air systems"
  },
  {
    "question": "Which VHF antenna is located on the lower fuselage?",
    "answers": [
      "VHF 3",
      "VHF 2",
      "None. All three are located on the upper fuselage",
      "VHF 1"
    ],
    "correct": 1,
    "category": "Communications"
  },
  {
    "question": "In Normal Law, what are the limits of the Pitch Attitude protection with flaps Full?",
    "answers": [
      "35Â° nose up progressively reduced to 20Â°",
      "30Â° nose up",
      "25Â° nose up. It is progressively reduced to 20Â° at low speed.",
      "There is no limit"
    ],
    "correct": 2,
    "category": "Flight controls"
  },
  {
    "question": "On the ground, which configuration would you expect the avionics ventilation system to select if the OAT is 3Â°C on an overcast day?",
    "answers": [
      "Open",
      "Intermediate",
      "Closed",
      "Normal"
    ],
    "correct": 2,
    "category": "Air systems"
  },
  {
    "question": "Regarding ECAM, which of the following statements is true?",
    "answers": [
      "An amber message on the E/WD is always accompanied by a Master Caution",
      "A Master Caution is always accompanied by an amber message on the E/WD",
      "Primary failures are identified by a star (*) next to them",
      "Independent failures are identified by a star (*) next to them"
    ],
    "correct": 1,
    "category": "Indicating/recording systems"
  },
  {
    "question": "On the ECAM E/WD, when does the LDG INHIBIT (magenta) memo appear?",
    "answers": [
      "Below 2,000 ft radio altitude",
      "With selection of FLAP 2 on the approach",
      "Below 800 ft radio altitude",
      "With selection of GEAR DOWN"
    ],
    "correct": 1,
    "category": "Indicating/recording systems"
  },
  {
    "question": "If a system page push button fails on the ECAM control panel, can the corresponding system page still be viewed?",
    "answers": [
      "No, the associated system page is no longer available",
      "Yes, but only if an ECAM alert is triggered for the related system, in this case the system page is automatically displayed. The page cannot be selected manually",
      "Yes, the associated system page can still be viewed via the use of the RCL pushbutton",
      "Yes. The ALL button allows the flight crew to select the desired SD page. This provides redundancy in the case of an ECAM control panel failure"
    ],
    "correct": 3,
    "category": "Indicating/recording systems"
  },
  {
    "question": "Select the correct statement about the wingtip brakes (WTB):",
    "answers": [
      "The WTBs activate in case of an uncommanded movement of the slats or flaps, such as runaway, asymmetry or overspeed. If the slat WTB is on, the flaps will still operate",
      "The wing tip brakes will only activate when asymmetry is detected with either the flap or slat system. The flap lever should remain in the position it was in at the time of WTB activation",
      "The WTBs activate when the flap or slat position disagree with the flap lever selection. If any WTB is on, both slats and flaps are locked in position, and cannot be released in flight",
      "The WTBs activate in case of an uncommanded movement of the slats or flaps, such as runaway, asymmetry or overspeed. If any WTB is on, both slats and flaps are locked in position, and cannot be released in flight"
    ],
    "correct": 0,
    "category": "Flight controls"
  },
  {
    "question": "On the ECAM display, which colour is used to make the crew aware of an abnormal configuration or failure, and no immediate action is required?",
    "answers": [
      "Red",
      "Blue",
      "Amber",
      "White"
    ],
    "correct": 2,
    "category": "Indicating/recording systems"
  },
  {
    "question": "When does the PTU operate?",
    "answers": [
      "At any time that there is more than a 500 PSI pressure difference between the green and yellow systems",
      "When there is more than a 750 PSI pressure difference between the green and yellow systems. The PTU is inhibited during the first engine start, and when the cargo doors are operated",
      "When there is more than a 500 PSI pressure difference between the green and yellow systems. The PTU is inhibited when both engines master switches are set to off",
      "When there is more than a 500 PSI pressure difference between the green and yellow systems. The PTU is inhibited during the first engine start, and when the cargo doors are operated"
    ],
    "correct": 3,
    "category": "Hydraulics"
  },
  {
    "question": "On the EFB T.O PERF page, how can MEL items be added to assure performance requirements are met?",
    "answers": [
      "On the last page of computations",
      "Must be manually calculated using FCOM",
      "By tapping on the flex temperature",
      "Dialog box in bottom left of T.O PERF page"
    ],
    "correct": 3,
    "category": "Performance"
  },
  {
    "question": "What is maximum value of Approach Correction",
    "answers": [
      "5 kt",
      "15 kt",
      "10 kt"
    ],
    "correct": 1,
    "category": "Performance"
  },
  {
    "question": "What is the maximum speed (VFE) with CONF FULL for the A320",
    "answers": [
      "177 kt",
      "195 kt",
      "185 kt",
      "175 kt"
    ],
    "correct": 0,
    "category": "Limitations"
  },
  {
    "question": "What is the maximum tyre speed",
    "answers": [
      "188 kt",
      "210 kt",
      "200 kt",
      "195 kt"
    ],
    "correct": 3,
    "category": "Limitations"
  },
  {
    "question": "On wich display(s) can the ground speed and TAS be viewed?",
    "answers": [
      "In the top right hand corner of the ND in only the ARC or NAV modes",
      "On the PDF or in the top left hand corner of the ND",
      "In the top left corner of the ND in only NAV and ARC modes",
      "In the top left corner of the ND in all modes"
    ],
    "correct": 3,
    "category": "Navigation"
  },
  {
    "question": "What is the function of the hydraulic priority valves?",
    "answers": [
      "They prioritise hydraulic power to the heavy load users",
      "They will close when the flight crew push the ENG 1(2) FIRE pushbutton",
      "They prioritise the engine driven pumps over the PTU",
      "If heavy load users cause a large drop in system pressure, the priority valve will close curring off supply to these loads"
    ],
    "correct": 3,
    "category": "Hydraulics"
  },
  {
    "question": "Select the statement that best describes the parking brake",
    "answers": [
      "If the parking brake fails, the parking brake must be selected off before the normal braking system can be applie via the brake pedals",
      "The parking brake uses a dedicated control valve to apply yellow hydraulic or brake accumulator pressure directly to the wheel brakes. This bypasses the alternate braking servo valve",
      "The parking brake accumulator can maintain parking pressure for at least 24hrs",
      "The parking brake uses the alternate braking servo valve to apply yellow hydraulic or brake accumulator pressure to the wheel brakes"
    ],
    "correct": 1,
    "category": "Landing gear"
  },
  {
    "question": "After a cockpit oxygen mask has been used, how can the mask microphone be cut-off and boom microphone be re-activated",
    "answers": [
      "Push the TMR RESET button on the OXYGEN panel",
      "Close the left hand door of the mask stowage box, and push the RESET/TEST slide. The OXY ON flag will disappear",
      "Close both doors on the mask stowage box",
      "Move the MASK-BOOM switch on the ACP back to the BOOM position"
    ],
    "correct": 1,
    "category": "Air systems"
  },
  {
    "question": "What is the primary method of communication for datalink messages controlled via the ATSU?",
    "answers": [
      "The datalink system primarily uses HF2",
      "The datalink system primarily uses VHF3",
      "The datalink system primarily uses SATCOM",
      "The datalink system uses a dedicated UHF radio"
    ],
    "correct": 1,
    "category": "Communications"
  },
  {
    "question": "The MIXER unit is connected to:",
    "answers": [
      "Only the packs and re-circulated cabin air",
      "Packs, re-circulated cabin air, emergency ram air inler, and HP ground connector",
      "Zone controllers",
      "Packs, re-circulated cabin air, emergency ram air inler, and LP ground connector"
    ],
    "correct": 3,
    "category": "Air systems"
  },
  {
    "question": "Select the correct statementa bout the AGENT pushbuttons on the FIRE panel",
    "answers": [
      "It is not possible to have an amber DISCH light without a white SQUID light on a AGENT pushbutton",
      "The agent buttons are always active allowing a bottle to be fired at any time, independent of the associated FIRE pushbutton position",
      "The DISCH light illuminates in amber as soon as the squid is fired for the corresponding bottle",
      "The DISCH light illuminates in amber when the corresponding fire extinguisher bottle has lost pressure"
    ],
    "correct": 3,
    "category": "Fire protection"
  },
  {
    "question": "With the ATT HDG switch set to CAPT 3, and AIR DATA switch set to NORM: which computer(s) will be providing air, attitude and heading data to the Captain's PFD?",
    "answers": [
      "ADIRU 3 will be providing air data, and ADIRU 1 attitude and heading data",
      "ADIRU 2 will be providing air data, and ADIRU 1 attitude and heading data",
      "ADIRU 3 will be providing all air, attitude and heading data",
      "ADIRU 1 will be providing air data, and ADIRU 3 attitude and heading data"
    ],
    "correct": 3,
    "category": "Auto flight"
  },
  {
    "question": "Which of the following communication methods are used for datalink messages?",
    "answers": [
      "VHF only",
      "SATCOM only",
      "VHF or HF only",
      "VHF, HF or SATCOM (where fitted and available)"
    ],
    "correct": 3,
    "category": "Communications"
  },
  {
    "question": "Select the correct statement about the AGENT pushbuttons on the FIRE panel",
    "answers": [
      "After an ENG or APU fire has been detected SQUIB illuminates in white on the corresponding agent pushbutton(s), this helps identify the agents to be activated",
      "When the associated FIRE PB (ENG or APU) is released SQUIB illuminates in amber on the corresponding agent pushbutton(s)",
      "After a ENG or APU fire has been detected SQUIB illuminates in white on the corresponding agent pushbutton(s). After the bottle has been discharged the SQUIB light is replaced by an amber DISCH light",
      "When the associated FIRE PB (ENG or APC)) is released SQUIB illuminates in white on the corresponding agent pushbutton(s)"
    ],
    "correct": 3,
    "category": "Fire protection"
  },
  {
    "question": "What will trigger the CAB PR LDG ELEV FAULT (amber) alert?",
    "answers": [
      "The failure of CPC 1+2",
      "The active CPC is no longer receiving the landing field elevation automatically from the FMGS. The flight crew must set the MODE SEL push button to MAN on the CABIN PRESS panel",
      "The outflow valve has failed to fully open after landing",
      "The active CPC is no longer receiving the landing field elevation automatically from the FMGS. The flight crew must adjust the target landing elevation using the LDG ELEV rotary knob on the CABIN PRESS panel"
    ],
    "correct": 3,
    "category": "Air systems"
  },
  {
    "question": "On the RMP, the ON/OFF switch controls:",
    "answers": [
      "Only the COM function of the RMP",
      "The power supply to the RMP",
      "The power supply to both the RMP and ACP",
      "Only the STBY NAV function of the RMP"
    ],
    "correct": 1,
    "category": "Communications"
  },
  {
    "question": "How can the flight crew arm the LOC and GS modes in order to fly an ILS approach?",
    "answers": [
      "Push the APP pushbutton on the FCCJ. Once LOC and G/S are armed ILS information (include G/S and LOC scales) will be displayed automatically on the PFD regardless of the selections made on the EFIS panels",
      "Push the APP pushbutton on the FCU. The ILS information (including LOC and G/S scales) will not be displayed on the PFD unless the LS push button is selected on the EFIS panels",
      "Push the LS button the EFIS panel located on the glareshield",
      "Push APP pushbutton FCU, however LOC and G/S modes will not arm or engage unless the LS button has been selected on both FO and CAPT EFIS panels"
    ],
    "correct": 1,
    "category": "Auto flight"
  },
  {
    "question": "Both engines and the APU are running, what must the flight crew do before selecting APU bleed? (X-BLEED set to AUTO)",
    "answers": [
      "The engine bleeds must be selected OFF, and crossbleed set to OPEN, before selecting the APU bleed to ON",
      "The engine bleeds must be selected OFF before selecting the APU bleed to ON. The crossbleed valve can remain in AUTO as it will open automatically",
      "Nothing, upon selecting APU bleed the crossbleed valve will automatically open, and each engine bleed valve will automatically close",
      "Turn ENG 1 bleed OFF, and confirm that the crossbleed is closed, before selecting APU bleed ON"
    ],
    "correct": 2,
    "category": "APU"
  },
  {
    "question": "When does the green AVAIL light illuminate on the APU start push button?",
    "answers": [
      "When N is above 93%",
      "When N is above 90%",
      "When N is above 95%",
      "N = 100%"
    ],
    "correct": 2,
    "category": "APU"
  },
  {
    "question": "Which ECAM alert level signifies a dangerous configuration, flight condition or a system failure that alters flight safety?",
    "answers": [
      "Level 3",
      "Advisory",
      "Level 2",
      "Level 1"
    ],
    "correct": 0,
    "category": "Indicating/recording systems"
  },
  {
    "question": "During gravity gear extension, in which direction should the GRAVITY GEAR EXTENSION handle be rotated, and what happens during each turn?",
    "answers": [
      "Clockwise, 2 turns. The first turn isolates the gear from the green hydraulic system, the second unlocks the doors and allows the gear to drop into the extended position",
      "Clockwise, 3 turns. The first turn isolates the gear from the green hydraulic system, the second unlocks the doors, the third releases the uplocks and allows the gear to drop into the extended position",
      "Anti-clockwise, one complete rotation will isolate the landing gear from the hydraulic system, and simultaneously release the up-locks. The gear will push the doors open as it extends",
      "Anti-clockwise, 3 turns. The first turn isolates the gear from the yellow hydraulic system, the second unlocks the doors, the third releases the up-locks and allows the gear to drop into the extended position"
    ],
    "correct": 1,
    "category": "Landing gear"
  },
  {
    "question": "How many igniters are used during an automatic engine start?",
    "answers": [
      "Both igniters are used for all engines starts, unless a circuit breaker for an individual igniter has been pulled",
      "Igniter A is used by default for all start attempts on the ground, if A fails then B is automatically selected In flight both igniters are used",
      "Only one igniter (A or B) is used for all automatic start attempts",
      "One igniter (A or B) is used on the first automatic start attempt on the ground. In flight both igniters are used for all start attempts"
    ],
    "correct": 3,
    "category": "Engine"
  },
  {
    "question": "In which areas of the engine are the fire detection loops located?",
    "answers": [
      "In the engine core and in the engine fan section",
      "In the fan and turbine sections",
      "In the engine core and the N2 gearbox",
      "In the pylon nacelle, in the engine core, and in the engine fan section"
    ],
    "correct": 3,
    "category": "Fire protection"
  },
  {
    "question": "What is the significance of a NW STRG DISC memo?",
    "answers": [
      "The memo appears when the nose wheel steering selector is in the towing position. It is always GREEN",
      "The memo appears when the nose wheel steering selector is in the towing position. It will be GREEN when the engines are not running, and AMBER when at least one engine is running",
      "It indicates that the BSCU has been switched off",
      "The PF has pushed the rudder PEDALS DISC push button on the hand wheel, to disconnect the rudder pedals from the nose wheel during the flight control check"
    ],
    "correct": 1,
    "category": "Landing gear"
  },
  {
    "question": "If a SEC fails, what happens to the spoiler(s) it controls?",
    "answers": [
      "The effected spoiler retains the deflection it has at the time of the loss, this may lead to asymmetrical deployment of the spoilers",
      "The effected spoiler retains the deflection it has at the time of the loss, and the symmetrical one on the other wing is inhibited",
      "The effected spoiler is automatically retracted, and this may lead to asymmetrical spoiler deployment",
      "The effected spoiler is automatically retracted, and the symmetrical one on the other wing is inhibited"
    ],
    "correct": 3,
    "category": "Flight controls"
  },
  {
    "question": "Which of the following statements about the use of APU bleed air is correct?",
    "answers": [
      "The use of APU bleed air for wing anti-ice is permitted, provided one pack is turned off",
      "The use of APU bleed air for dual pack operation in flight is prohibited",
      "APU bleed air is available for air conditioning throughout the flight envelope",
      "The use of APU bleed air for wing anti-ice is not permitted"
    ],
    "correct": 3,
    "category": "APU"
  },
  {
    "question": "Select the correct statement about an engine relight in flight:",
    "answers": [
      "APU bleed can be used to assist with an engine start throughout the entire flight envelope",
      "During an automatic start in flight, the FADEC may not need to engage the starter motor if the engine is wind milling at a sufficient N2",
      "In flight the FADEC always commands a starter-assisted air start",
      "Automatic start is unavailable in flight"
    ],
    "correct": 1,
    "category": "Engine"
  },
  {
    "question": "What happens if you take off without V2 being entered on the PERF page?",
    "answers": [
      "You cannot take off. V2 entry is mandatory",
      "You will not be able to climb after VR",
      "If V2 is not inserted, the Indicated Air Speed will not engage for go-around",
      "If V2 is not inserted, the speed reference system SRS will not engage for takeoff"
    ],
    "correct": 3,
    "category": "Performance"
  },
  {
    "question": "What is the meaning of a AMBER light in a flight deck pushbutton?",
    "answers": [
      "Normal system operation",
      "A failure that the flight crew should be aware of, but does not call for immediate action",
      "An abnormal pushbutton position",
      "A failure requiring immediate action"
    ],
    "correct": 1,
    "category": "Indicating/recording systems"
  },
  {
    "question": "When is pack flow automatically increased to HIGH, regardless of the position of the PACK FLOW control knob?",
    "answers": [
      "When using APU bleed or during single pack operation",
      "Only when using APU bleed",
      "The pack flow never exceeds the selection on the AIR COND panel",
      "When temperature demand cannot be satisfied"
    ],
    "correct": 0,
    "category": "Air systems"
  }
];




