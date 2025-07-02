export interface Patient {
  id: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  gender: 'male' | 'female' | 'other';
  email: string;
  phone: string;
  address: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
  };
  medicalHistory: {
    conditions: string[];
    allergies: string[];
    medications: string[];
  };
  emergencyContact: {
    name: string;
    relationship: string;
    phone: string;
  };
  lastVisit: string;
  nextAppointment?: string;
  status: 'active' | 'inactive' | 'pending';
  bloodType?: string;
  height?: string;
  weight?: string;
  insurance: {
    provider: string;
    policyNumber: string;
    groupNumber: string;
  };
}

export const patients: Patient[] = [
  {
    id: "1",
    firstName: "Sarah",
    lastName: "Johnson",
    dateOfBirth: "1985-03-15",
    gender: "female",
    email: "sarah.johnson@email.com",
    phone: "(555) 123-4567",
    address: {
      street: "123 Oak Street",
      city: "Springfield",
      state: "IL",
      zipCode: "62701"
    },
    medicalHistory: {
      conditions: ["Hypertension", "Type 2 Diabetes"],
      allergies: ["Penicillin", "Peanuts"],
      medications: ["Metformin", "Lisinopril"]
    },
    emergencyContact: {
      name: "Michael Johnson",
      relationship: "Spouse",
      phone: "(555) 123-4568"
    },
    lastVisit: "2024-01-15",
    nextAppointment: "2024-02-20",
    status: "active",
    bloodType: "A+",
    height: "5'6\"",
    weight: "145 lbs",
    insurance: {
      provider: "Blue Cross Blue Shield",
      policyNumber: "BCBS123456",
      groupNumber: "GRP789"
    }
  },
  {
    id: "2",
    firstName: "David",
    lastName: "Chen",
    dateOfBirth: "1992-07-22",
    gender: "male",
    email: "david.chen@email.com",
    phone: "(555) 234-5678",
    address: {
      street: "456 Maple Avenue",
      city: "Chicago",
      state: "IL",
      zipCode: "60601"
    },
    medicalHistory: {
      conditions: ["Asthma"],
      allergies: ["Dust", "Pollen"],
      medications: ["Albuterol", "Fluticasone"]
    },
    emergencyContact: {
      name: "Lisa Chen",
      relationship: "Sister",
      phone: "(555) 234-5679"
    },
    lastVisit: "2024-01-10",
    status: "active",
    bloodType: "O+",
    height: "6'0\"",
    weight: "180 lbs",
    insurance: {
      provider: "Aetna",
      policyNumber: "AET789012",
      groupNumber: "GRP456"
    }
  },
  {
    id: "3",
    firstName: "Maria",
    lastName: "Garcia",
    dateOfBirth: "1978-11-08",
    gender: "female",
    email: "maria.garcia@email.com",
    phone: "(555) 345-6789",
    address: {
      street: "789 Pine Road",
      city: "Aurora",
      state: "IL",
      zipCode: "60505"
    },
    medicalHistory: {
      conditions: ["Arthritis", "Osteoporosis"],
      allergies: ["Sulfa drugs"],
      medications: ["Ibuprofen", "Calcium supplements"]
    },
    emergencyContact: {
      name: "Carlos Garcia",
      relationship: "Son",
      phone: "(555) 345-6790"
    },
    lastVisit: "2024-01-05",
    nextAppointment: "2024-03-01",
    status: "active",
    bloodType: "B-",
    height: "5'4\"",
    weight: "130 lbs",
    insurance: {
      provider: "UnitedHealth",
      policyNumber: "UHC345678",
      groupNumber: "GRP123"
    }
  },
  {
    id: "4",
    firstName: "James",
    lastName: "Wilson",
    dateOfBirth: "1965-09-14",
    gender: "male",
    email: "james.wilson@email.com",
    phone: "(555) 456-7890",
    address: {
      street: "321 Elm Street",
      city: "Naperville",
      state: "IL",
      zipCode: "60540"
    },
    medicalHistory: {
      conditions: ["Heart Disease", "High Cholesterol"],
      allergies: ["Shellfish"],
      medications: ["Atorvastatin", "Aspirin", "Metoprolol"]
    },
    emergencyContact: {
      name: "Patricia Wilson",
      relationship: "Wife",
      phone: "(555) 456-7891"
    },
    lastVisit: "2024-01-20",
    status: "active",
    bloodType: "AB+",
    height: "5'10\"",
    weight: "195 lbs",
    insurance: {
      provider: "Cigna",
      policyNumber: "CIG567890",
      groupNumber: "GRP234"
    }
  },
  {
    id: "5",
    firstName: "Emily",
    lastName: "Davis",
    dateOfBirth: "1995-04-30",
    gender: "female",
    email: "emily.davis@email.com",
    phone: "(555) 567-8901",
    address: {
      street: "654 Birch Lane",
      city: "Evanston",
      state: "IL",
      zipCode: "60201"
    },
    medicalHistory: {
      conditions: ["Anxiety", "Depression"],
      allergies: ["Latex"],
      medications: ["Sertraline", "Buspirone"]
    },
    emergencyContact: {
      name: "Robert Davis",
      relationship: "Father",
      phone: "(555) 567-8902"
    },
    lastVisit: "2024-01-12",
    nextAppointment: "2024-02-15",
    status: "active",
    bloodType: "O-",
    height: "5'7\"",
    weight: "140 lbs",
    insurance: {
      provider: "Humana",
      policyNumber: "HUM678901",
      groupNumber: "GRP567"
    }
  },
  {
    id: "6",
    firstName: "Michael",
    lastName: "Brown",
    dateOfBirth: "1988-12-03",
    gender: "male",
    email: "michael.brown@email.com",
    phone: "(555) 678-9012",
    address: {
      street: "987 Cedar Court",
      city: "Rockford",
      state: "IL",
      zipCode: "61101"
    },
    medicalHistory: {
      conditions: ["Migraine", "Insomnia"],
      allergies: ["Codeine"],
      medications: ["Sumatriptan", "Melatonin"]
    },
    emergencyContact: {
      name: "Jennifer Brown",
      relationship: "Wife",
      phone: "(555) 678-9013"
    },
    lastVisit: "2024-01-08",
    status: "inactive",
    bloodType: "A-",
    height: "6'2\"",
    weight: "190 lbs",
    insurance: {
      provider: "Kaiser Permanente",
      policyNumber: "KAI789012",
      groupNumber: "GRP890"
    }
  },
  {
    id: "7",
    firstName: "Lisa",
    lastName: "Taylor",
    dateOfBirth: "1982-06-18",
    gender: "female",
    email: "lisa.taylor@email.com",
    phone: "(555) 789-0123",
    address: {
      street: "147 Willow Way",
      city: "Peoria",
      state: "IL",
      zipCode: "61601"
    },
    medicalHistory: {
      conditions: ["Hypothyroidism"],
      allergies: ["Iodine"],
      medications: ["Levothyroxine"]
    },
    emergencyContact: {
      name: "Thomas Taylor",
      relationship: "Husband",
      phone: "(555) 789-0124"
    },
    lastVisit: "2024-01-25",
    nextAppointment: "2024-02-28",
    status: "active",
    bloodType: "B+",
    height: "5'5\"",
    weight: "150 lbs",
    insurance: {
      provider: "Anthem",
      policyNumber: "ANT890123",
      groupNumber: "GRP012"
    }
  },
  {
    id: "8",
    firstName: "Robert",
    lastName: "Anderson",
    dateOfBirth: "1973-01-25",
    gender: "male",
    email: "robert.anderson@email.com",
    phone: "(555) 890-1234",
    address: {
      street: "258 Spruce Drive",
      city: "Springfield",
      state: "IL",
      zipCode: "62701"
    },
    medicalHistory: {
      conditions: ["Diabetes", "Kidney Disease"],
      allergies: ["Contrast dye"],
      medications: ["Insulin", "Metformin", "Losartan"]
    },
    emergencyContact: {
      name: "Susan Anderson",
      relationship: "Daughter",
      phone: "(555) 890-1235"
    },
    lastVisit: "2024-01-18",
    status: "active",
    bloodType: "O+",
    height: "5'11\"",
    weight: "220 lbs",
    insurance: {
      provider: "Blue Cross Blue Shield",
      policyNumber: "BCBS901234",
      groupNumber: "GRP345"
    }
  }
]; 