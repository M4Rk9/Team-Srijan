export type Batch = "K23" | "K24";

export type SubteamMember = {
  name: string;
  batch: Batch;
  responsibility: string;
  department?: string;
  linkedin?: string;
};

export type Subteam = {
  slug: string;
  title: string;
  summary: string;
  members: SubteamMember[];
};

export const batches: Batch[] = ["K23", "K24"];

export const subteams: Subteam[] = [
  {
    slug: "aerodynamics",
    title: "Aerodynamics",
    summary: "CFD, bodywork, cooling flow, aero packaging, and composite surfaces.",
    members: [
      {
        name: "Suchand Murmu",
        batch: "K24",
        responsibility: "Aerodynamics Member",
        department: "Mechanical Engineer",
        linkedin: "https://www.linkedin.com/in/suchand-murmu-20150a265"
      },
      { name: "Samaksh", batch: "K24", responsibility: "Aerodynamics Member", department: "Mechanical Engineer" }
    ]
  },
  {
    slug: "brakes",
    title: "Brakes",
    summary: "Pedal box, brake bias, calipers, rotors, hydraulic routing, and reliability validation.",
    members: [
      { name: "Anom Baladkar", batch: "K24", responsibility: "Brakes Member", department: "Mechanical Engineer" }
    ]
  },
  {
    slug: "chassis",
    title: "Chassis",
    summary: "Space frame design, ergonomics, structural validation, fabrication planning, and packaging.",
    members: [
      { name: "Shashwat Pankaj", batch: "K23", responsibility: "Chassis Lead", department: "Mechanical Engineer" },
      {
        name: "Gaurav Sharma",
        batch: "K24",
        responsibility: "Chassis Member",
        department: "Chemical Engineer",
        linkedin: "https://www.linkedin.com/in/gauravsharma2837"
      },
      { name: "Shrivatsa Raj Gahoi", batch: "K24", responsibility: "Chassis Member", department: "Mechanical Engineer" },
      { name: "Natisha Anand", batch: "K24", responsibility: "Chassis Member", department: "Mechanical Engineer" }
    ]
  },
  {
    slug: "electrical",
    title: "Electrical",
    summary: "Wiring harness, ECU integration, DAQ, sensors, telemetry, and driver interface systems.",
    members: [
      { name: "Satyam Kumar", batch: "K24", responsibility: "Electrical Member", department: "Electrical & Electronics Engineer" }
    ]
  },
  {
    slug: "powertrain",
    title: "Powertrain",
    summary: "Engine systems, intake, exhaust, drivetrain, calibration, cooling, and transmission.",
    members: [
      { name: "Arnav Sarna", batch: "K23", responsibility: "Powertrain Lead", department: "Mechanical Engineer" },
      { name: "Pranshu", batch: "K23", responsibility: "Team Captain", department: "Mechanical Engineer" },
      { name: "Brianson John Lakra", batch: "K24", responsibility: "Powertrain Member", department: "Mechanical Engineer" },
      { name: "Aryan Kumar", batch: "K24", responsibility: "Powertrain Member", department: "Mechanical Engineer" },
      { name: "Ankit Kumar", batch: "K24", responsibility: "Powertrain Member", department: "Production & Industrial Engineer" }
    ]
  },
  {
    slug: "vehicle-dynamics",
    title: "Vehicle Dynamics",
    summary: "Suspension, steering, tyres, kinematics, compliance, lap-time behavior, and setup.",
    members: [
      { name: "Ayush Kumar Keshri", batch: "K23", responsibility: "President", department: "Mechanical Engineer" },
      { name: "Souvik Sen", batch: "K23", responsibility: "Vehicle Dynamics Lead", department: "Production & Industrial Engineer" },
      {
        name: "Adarsh Kumar",
        batch: "K24",
        responsibility: "Vehicle Dynamics Member",
        department: "Mechanical Engineer",
        linkedin: "https://www.linkedin.com/in/adarsh-kumar-61ba13324"
      },
      {
        name: "Rupam Kundu",
        batch: "K24",
        responsibility: "Vehicle Dynamics Member",
        department: "Production & Industrial Engineer",
        linkedin: "https://www.linkedin.com/in/rupam-kundu-3a153237b"
      },
      { name: "Aryan Adhikari", batch: "K24", responsibility: "Vehicle Dynamics Member", department: "Mechanical Engineer" }
    ]
  },
  {
    slug: "management-media",
    title: "Management & Media",
    summary: "Program management, sponsorship, brand communication, media operations, and outreach.",
    members: [
      {
        name: "Ayush Mark Hembrom",
        batch: "K24",
        responsibility: "Management & Media Member",
        department: "Electronics & Communication Engineer",
        linkedin: "https://www.linkedin.com/in/ayushmarkhembrom"
      },
      { name: "Yash Anand", batch: "K24", responsibility: "Management & Media Member", department: "Mechanical Engineer" },
      { name: "Mourice Lakra", batch: "K24", responsibility: "Management & Media Member", department: "Computer Science Engineer" }
    ]
  }
];

export function getSubteam(slug: string) {
  return subteams.find((subteam) => subteam.slug === slug);
}
