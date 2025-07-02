'use client';

import { useParams, useRouter } from 'next/navigation';
import { patients } from '../../data/patients';
import Card from '../../components/ui/Card';
import Badge from '../../components/ui/Badge';
import Button from '../../components/ui/Button';
import { notFound } from 'next/navigation';

export default function PatientDetail() {
  const params = useParams();
  const router = useRouter();
  const patient = patients.find(p => p.id === params.id);

  if (!patient) {
    notFound();
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getStatusVariant = (status: string) => {
    switch (status) {
      case 'active': return 'success';
      case 'inactive': return 'error';
      case 'pending': return 'warning';
      default: return 'default';
    }
  };

  const getAge = (dateOfBirth: string) => {
    const today = new Date();
    const birthDate = new Date(dateOfBirth);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    
    return age;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-4">
              <Button 
                variant="ghost" 
                onClick={() => router.back()}
                className="flex items-center space-x-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <span>Back</span>
              </Button>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  {patient.firstName} {patient.lastName}
                </h1>
                <p className="text-gray-600 mt-1">Patient ID: {patient.id}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant={getStatusVariant(patient.status) as any} size="lg">
                {patient.status}
              </Badge>
              <Button variant="primary">
                Edit Patient
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Patient Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Basic Information */}
            <Card className="p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Basic Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <p className="text-gray-900">{patient.firstName} {patient.lastName}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
                  <p className="text-gray-900">{formatDate(patient.dateOfBirth)} ({getAge(patient.dateOfBirth)} years old)</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
                  <p className="text-gray-900 capitalize">{patient.gender}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Blood Type</label>
                  <p className="text-gray-900">{patient.bloodType || 'Not specified'}</p>
                </div>
                {patient.height && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Height</label>
                    <p className="text-gray-900">{patient.height}</p>
                  </div>
                )}
                {patient.weight && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Weight</label>
                    <p className="text-gray-900">{patient.weight}</p>
                  </div>
                )}
              </div>
            </Card>

            {/* Contact Information */}
            <Card className="p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Contact Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <p className="text-gray-900">{patient.email}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <p className="text-gray-900">{patient.phone}</p>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                  <p className="text-gray-900">
                    {patient.address.street}<br />
                    {patient.address.city}, {patient.address.state} {patient.address.zipCode}
                  </p>
                </div>
              </div>
            </Card>

            {/* Medical History */}
            <Card className="p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Medical History
              </h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Medical Conditions</label>
                  <div className="flex flex-wrap gap-2">
                    {patient.medicalHistory.conditions.length > 0 ? (
                      patient.medicalHistory.conditions.map((condition, index) => (
                        <Badge key={index} variant="error" size="sm">
                          {condition}
                        </Badge>
                      ))
                    ) : (
                      <p className="text-gray-500 text-sm">No conditions recorded</p>
                    )}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Allergies</label>
                  <div className="flex flex-wrap gap-2">
                    {patient.medicalHistory.allergies.length > 0 ? (
                      patient.medicalHistory.allergies.map((allergy, index) => (
                        <Badge key={index} variant="warning" size="sm">
                          {allergy}
                        </Badge>
                      ))
                    ) : (
                      <p className="text-gray-500 text-sm">No allergies recorded</p>
                    )}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Current Medications</label>
                  <div className="flex flex-wrap gap-2">
                    {patient.medicalHistory.medications.length > 0 ? (
                      patient.medicalHistory.medications.map((medication, index) => (
                        <Badge key={index} variant="info" size="sm">
                          {medication}
                        </Badge>
                      ))
                    ) : (
                      <p className="text-gray-500 text-sm">No medications recorded</p>
                    )}
                  </div>
                </div>
              </div>
            </Card>

            {/* Insurance Information */}
            <Card className="p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                Insurance Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Provider</label>
                  <p className="text-gray-900">{patient.insurance.provider}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Policy Number</label>
                  <p className="text-gray-900 font-mono">{patient.insurance.policyNumber}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Group Number</label>
                  <p className="text-gray-900 font-mono">{patient.insurance.groupNumber}</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Emergency Contact */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <svg className="w-5 h-5 mr-2 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
                Emergency Contact
              </h3>
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <p className="text-gray-900">{patient.emergencyContact.name}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Relationship</label>
                  <p className="text-gray-900">{patient.emergencyContact.relationship}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <p className="text-gray-900">{patient.emergencyContact.phone}</p>
                </div>
              </div>
            </Card>

            {/* Visit History */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <svg className="w-5 h-5 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Visit History
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Last Visit</label>
                  <p className="text-gray-900">{formatDate(patient.lastVisit)}</p>
                </div>
                {patient.nextAppointment && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Next Appointment</label>
                    <p className="text-blue-600 font-medium">{formatDate(patient.nextAppointment)}</p>
                  </div>
                )}
                <Button variant="outline" className="w-full">
                  Schedule Appointment
                </Button>
              </div>
            </Card>

            {/* Quick Actions */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Button variant="primary" className="w-full">
                  View Medical Records
                </Button>
                <Button variant="outline" className="w-full">
                  Send Message
                </Button>
                <Button variant="outline" className="w-full">
                  Download Records
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
} 