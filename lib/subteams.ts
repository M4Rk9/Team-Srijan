export type SubteamMember = {
  name: string;
  branch: string;
  graduationYear: number;
  photo: string;
  linkedin?: string;
};

export type Subteam = {
  slug: string;
  title: string;
  summary: string;
  members: SubteamMember[];
};

export const subteams: Subteam[] = [
  {
    slug: "aerodynamics",
    title: "Aerodynamics",
    summary: "CFD, bodywork, cooling flow, aero packaging, and composite surfaces.",
    members: [
      {
        name: "Samaksh Upadhyay",
        branch: "Mechanical Engineering",
        graduationYear: 2028,
        photo: "/images/team/samaksh-upadhyay.jpg",
        linkedin: "https://www.linkedin.com/in/samaksh-upadhyay-5477341ba"
      },
      {
        name: "Suchand Murmu",
        branch: "Mechanical Engineering",
        graduationYear: 2028,
        photo: "/images/team/suchand-murmu.jpg",
        linkedin: "https://www.linkedin.com/in/suchand-murmu-20150a265"
      },
      {
        name: "Koushik Raj",
        branch: "Mechanical Engineering",
        graduationYear: 2029,
        photo: "/images/team/koushik-raj.jpg",
        linkedin: "https://www.linkedin.com/in/koushik-raj-2a766541a"
      },
      {
        name: "Kaushal Goel",
        branch: "Mechanical Engineering",
        graduationYear: 2029,
        photo: "/images/team/kaushal-goel.jpg",
        linkedin: "https://www.linkedin.com/in/kaushal-goel-08344b380"
      },
      {
        name: "Avinash Kumar",
        branch: "Mechanical Engineering",
        graduationYear: 2029,
        photo: "/images/team/avinash-kumar.jpg",
        linkedin: "https://www.linkedin.com/in/avinash-kumar-1517a9316"
      }
    ]
  },
  {
    slug: "brakes",
    title: "Brakes",
    summary: "Pedal box, brake bias, calipers, rotors, hydraulic routing, and reliability validation.",
    members: [
      {
        name: "Anom Baladkar",
        branch: "Mechanical Engineering",
        graduationYear: 2028,
        photo: "/images/team/anom-baladkar.jpg",
        linkedin: "https://www.linkedin.com/in/anom-baladkar-385245357"
      },
      {
        name: "Ketan Kumar",
        branch: "Mechanical Engineering",
        graduationYear: 2029,
        photo: "/images/team/ketan-kumar.jpg",
        linkedin: "https://www.linkedin.com/in/ketan-kumar-063b12379"
      },
      {
        name: "Shauryaman Singh Gaharwar",
        branch: "Mechanical Engineering",
        graduationYear: 2029,
        photo: "/images/team/shauryaman-singh-gaharwar.jpg",
        linkedin: "https://www.linkedin.com/in/shauryaman-singh-1987b4421"
      }
    ]
  },
  {
    slug: "chassis",
    title: "Chassis",
    summary: "Space frame design, ergonomics, structural validation, fabrication planning, and packaging.",
    members: [
      {
        name: "Shashwat Pankaj Singh",
        branch: "Mechanical Engineering",
        graduationYear: 2027,
        photo: "/images/team/shashwat-pankaj-singh.jpg",
        linkedin: "https://www.linkedin.com/in/shashwat-pankaj-singh"
      },
      {
        name: "Natisha Anand",
        branch: "Mechanical Engineering",
        graduationYear: 2028,
        photo: "/images/team/natisha-anand.jpg",
        linkedin: "https://www.linkedin.com/in/natisha-anand-42ab59421"
      },
      {
        name: "Gaurav Sharma",
        branch: "Chemical Engineering",
        graduationYear: 2028,
        photo: "/images/team/gaurav-sharma.jpg",
        linkedin: "https://www.linkedin.com/in/gauravsharma2837"
      },
      {
        name: "Shrivatsa Raj Gahoi",
        branch: "Mechanical Engineering",
        graduationYear: 2028,
        photo: "/images/team/shrivatsa-raj-gahoi.jpg",
        linkedin: "https://www.linkedin.com/in/shrivatsa-raj-gahoi-b8b17137b"
      },
      {
        name: "Atin Singh",
        branch: "Mechanical Engineering",
        graduationYear: 2029,
        photo: "/images/team/atin-singh.jpg",
        linkedin: "https://www.linkedin.com/in/atin-singh-b5383a37b"
      },
      {
        name: "Ashish Sharma",
        branch: "Chemical Engineering",
        graduationYear: 2029,
        photo: "/images/team/ashish-sharma.jpg",
        linkedin: "https://www.linkedin.com/in/ashish-sharma-2397b8389"
      },
      {
        name: "Sahil Jaglan",
        branch: "Mechanical Engineering",
        graduationYear: 2029,
        photo: "/images/team/sahil-jaglan.jpg",
        linkedin: "https://www.linkedin.com/in/sahil-jaglan-668b14421"
      },
      {
        name: "Abir Ray",
        branch: "Mechanical Engineering",
        graduationYear: 2029,
        photo: "/images/team/abir-ray.jpg",
        linkedin: "https://www.linkedin.com/in/abir-ray-3a8a633a4"
      }
    ]
  },
  {
    slug: "electrical",
    title: "Electrical",
    summary: "Wiring harness, ECU integration, DAQ, sensors, telemetry, and driver interface systems.",
    members: [
      {
        name: "Satyam Kumar",
        branch: "Electronics and Electrical Engineering",
        graduationYear: 2028,
        photo: "/images/team/satyam-kumar.jpg",
        linkedin: "https://www.linkedin.com/in/satyam-kumar-215952325"
      },
      {
        name: "Lilit Aind",
        branch: "Electronics and Communication Engineering",
        graduationYear: 2029,
        photo: "/images/team/lilit-aind.jpg",
        linkedin: "https://www.linkedin.com/in/lilit-aind-4a712a3ba"
      },
      {
        name: "Shaban Rizwi",
        branch: "Electronics and Communication Engineering",
        graduationYear: 2029,
        photo: "/images/team/shaban-rizwi.jpg"
      },
      {
        name: "Aaditya Sah",
        branch: "Electrical and Electronics Engineering",
        graduationYear: 2029,
        photo: "/images/team/aaditya-sah.jpg",
        linkedin: "https://www.linkedin.com/in/aaditya-sah-aa2876415"
      }
    ]
  },
  {
    slug: "powertrain",
    title: "Powertrain",
    summary: "Engine systems, intake, exhaust, drivetrain, calibration, cooling, and transmission.",
    members: [
      {
        name: "Pranshu",
        branch: "Mechanical Engineering",
        graduationYear: 2027,
        photo: "/images/team/pranshu.jpg",
        linkedin: "https://www.linkedin.com/in/pranshu527"
      },
      {
        name: "Arnav Sarna",
        branch: "Mechanical Engineering",
        graduationYear: 2027,
        photo: "/images/team/arnav-sarna.jpg",
        linkedin: "https://www.linkedin.com/in/arnav-sarna2905"
      },
      {
        name: "Aryan Kumar",
        branch: "Mechanical Engineering",
        graduationYear: 2028,
        photo: "/images/team/aryan-kumar.jpg",
        linkedin: "https://www.linkedin.com/in/aryan-kumar-344a78381"
      },
      {
        name: "Ankit Kumar",
        branch: "Production and Industrial Engineering",
        graduationYear: 2028,
        photo: "/images/team/ankit-kumar.jpg",
        linkedin: "https://www.linkedin.com/in/ankit-kumar-315b313ab"
      },
      {
        name: "Brianson John Lakra",
        branch: "Mechanical Engineering",
        graduationYear: 2028,
        photo: "/images/team/brianson-john-lakra.jpg",
        linkedin: "https://www.linkedin.com/in/brianson-john-lakra-91971836a"
      },
      {
        name: "Abhinav Raj",
        branch: "Mechanical Engineering",
        graduationYear: 2029,
        photo: "/images/team/abhinav-raj.jpg",
        linkedin: "https://www.linkedin.com/in/abhinav-raj-a10222400"
      },
      {
        name: "Manav Singh",
        branch: "Mechanical Engineering",
        graduationYear: 2029,
        photo: "/images/team/manav-singh.jpg",
        linkedin: "https://www.linkedin.com/in/manav-singh-859465383"
      },
      {
        name: "Meet Porwal",
        branch: "Production and Industrial Engineering",
        graduationYear: 2029,
        photo: "/images/team/meet-porwal.jpg",
        linkedin: "https://www.linkedin.com/in/meet-porwal-715457360"
      },
      {
        name: "Kanhaiya Kumar",
        branch: "Mechanical Engineering",
        graduationYear: 2029,
        photo: "/images/team/kanhaiya-kumar.jpg",
        linkedin: "https://www.linkedin.com/in/kanhaiya-kumar-1331963b3"
      },
      {
        name: "Kumar Vaibhav",
        branch: "Civil Engineering",
        graduationYear: 2029,
        photo: "/images/team/kumar-vaibhav.jpg",
        linkedin: "https://www.linkedin.com/in/kumar-vaibhav-805923421"
      }
    ]
  },
  {
    slug: "vehicle-dynamics",
    title: "Vehicle Dynamics",
    summary: "Suspension, steering, tyres, kinematics, compliance, lap-time behavior, and setup.",
    members: [
      {
        name: "Keshri Ayush",
        branch: "Mechanical Engineering",
        graduationYear: 2027,
        photo: "/images/team/keshri-ayush.jpg",
        linkedin: "https://www.linkedin.com/in/keshriayush"
      },
      {
        name: "Souvik Sen",
        branch: "Production and Industrial Engineering",
        graduationYear: 2027,
        photo: "/images/team/souvik-sen.jpg",
        linkedin: "https://www.linkedin.com/in/sensouviks"
      },
      {
        name: "Rupam Kundu",
        branch: "Production and Industrial Engineering",
        graduationYear: 2028,
        photo: "/images/team/rupam-kundu.jpg",
        linkedin: "https://www.linkedin.com/in/rupam-kundu-3a153237b"
      },
      {
        name: "Adarsh Kumar",
        branch: "Mechanical Engineering",
        graduationYear: 2028,
        photo: "/images/team/adarsh-kumar.jpg",
        linkedin: "https://www.linkedin.com/in/adarsh-kumar-61ba13324"
      },
      {
        name: "Aryan Adhikari",
        branch: "Mechanical Engineering",
        graduationYear: 2028,
        photo: "/images/team/aryan-adhikari.jpg",
        linkedin: "https://www.linkedin.com/in/aryan-adhikari-8a1177380"
      },
      {
        name: "Abhishek Kumar",
        branch: "Mechanical Engineering",
        graduationYear: 2029,
        photo: "/images/team/abhishek-kumar.jpg",
        linkedin: "https://www.linkedin.com/in/abhishek-kumar-b32092293"
      },
      {
        name: "Dharitri Acharya",
        branch: "Computer Science and Engineering",
        graduationYear: 2029,
        photo: "/images/team/dharitri-acharya.jpg",
        linkedin: "https://www.linkedin.com/in/dharitri-acharya-604946383"
      }
    ]
  },
  {
    slug: "management-media",
    title: "Management & Media",
    summary: "Program management, sponsorship, brand communication, media operations, and outreach.",
    members: [
      {
        name: "Mourice Lakra",
        branch: "Computer Science and Engineering",
        graduationYear: 2028,
        photo: "/images/team/mourice-lakra.jpg",
        linkedin: "https://www.linkedin.com/in/mourice-lakra-65940b332"
      },
      {
        name: "Yash Anand",
        branch: "Mechanical Engineering",
        graduationYear: 2028,
        photo: "/images/team/yash-anand.jpg"
      },
      {
        name: "Ayush Mark Hembrom",
        branch: "Electronics and Communication Engineering",
        graduationYear: 2028,
        photo: "/images/team/ayush-mark-hembrom.jpg",
        linkedin: "https://www.linkedin.com/in/ayushmarkhembrom"
      },
      {
        name: "Aarav Kumar",
        branch: "Electronics and Communication Engineering",
        graduationYear: 2029,
        photo: "/images/team/aarav-kumar.jpg",
        linkedin: "https://www.linkedin.com/in/aarav-kumar-8219773ab"
      },
      {
        name: "Sujal Paliwal",
        branch: "Production and Industrial Engineering",
        graduationYear: 2029,
        photo: "/images/team/sujal-paliwal.jpg",
        linkedin: "https://www.linkedin.com/in/sujal-paliwal-1249a2397"
      },
      {
        name: "Naisha Bari",
        branch: "Electronics and Communication Engineering",
        graduationYear: 2029,
        photo: "/images/team/naisha-bari.jpg",
        linkedin: "https://www.linkedin.com/in/naisha-bari-24b83a2a2"
      },
      {
        name: "Satyam Shrivastav",
        branch: "Electronics and Communication Engineering",
        graduationYear: 2029,
        photo: "/images/team/satyam-shrivastav.jpg",
        linkedin: "https://www.linkedin.com/in/satyam-shrivastav-57b76437a"
      },
      {
        name: "Vedansh Arya Oraon",
        branch: "Computer Science and Engineering",
        graduationYear: 2029,
        photo: "/images/team/vedansh-arya-oraon.jpg",
        linkedin: "https://www.linkedin.com/in/vedansh-arya-oraon-2b68183b4"
      }
    ]
  }
];

export function getSubteam(slug: string) {
  return subteams.find((subteam) => subteam.slug === slug);
}
