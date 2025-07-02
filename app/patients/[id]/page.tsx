'use client';

import { useParams, useRouter } from 'next/navigation';
import { patients } from '../../data/patients';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { 
  ArrowLeftIcon,
  UserIcon,
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  ExclamationTriangleIcon,
  CalendarIcon,
  DocumentTextIcon,
  ShieldCheckIcon,
  EyeIcon,
  ChatBubbleLeftRightIcon,
  ArrowDownTrayIcon
} from '@heroicons/react/24/outline';
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
      case 'active': return 'default';
      case 'inactive': return 'destructive';
      case 'pending': return 'secondary';
      default: return 'outline';
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
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <Button 
                variant="ghost" 
                onClick={() => router.back()}
                className="flex items-center space-x-2"
              >
                <ArrowLeftIcon className="h-4 w-4" />
                <span>Back</span>
              </Button>
              <div>
                <h1 className="text-3xl font-bold">
                  {patient.firstName} {patient.lastName}
                </h1>
                <p className="text-muted-foreground mt-1">Patient ID: {patient.id}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant={getStatusVariant(patient.status) as any}>
                {patient.status}
              </Badge>
              <Button>
                Edit Patient
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Patient Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Basic Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <UserIcon className="h-5 w-5 mr-2" />
                  Basic Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">Full Name</label>
                    <p className="text-sm">{patient.firstName} {patient.lastName}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">Date of Birth</label>
                    <p className="text-sm">{formatDate(patient.dateOfBirth)} ({getAge(patient.dateOfBirth)} years old)</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">Gender</label>
                    <p className="text-sm capitalize">{patient.gender}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">Blood Type</label>
                    <p className="text-sm">{patient.bloodType || 'Not specified'}</p>
                  </div>
                  {patient.height && (
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">Height</label>
                      <p className="text-sm">{patient.height}</p>
                    </div>
                  )}
                  {patient.weight && (
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">Weight</label>
                      <p className="text-sm">{patient.weight}</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <EnvelopeIcon className="h-5 w-5 mr-2" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">Email</label>
                    <p className="text-sm">{patient.email}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">Phone</label>
                    <p className="text-sm">{patient.phone}</p>
                  </div>
                  <div className="md:col-span-2">
                    <label className="text-sm font-medium text-muted-foreground">Address</label>
                    <p className="text-sm">
                      {patient.address.street}<br />
                      {patient.address.city}, {patient.address.state} {patient.address.zipCode}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Medical History */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <DocumentTextIcon className="h-5 w-5 mr-2" />
                  Medical History
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <label className="text-sm font-medium text-muted-foreground mb-2 block">Medical Conditions</label>
                    <div className="flex flex-wrap gap-2">
                      {patient.medicalHistory.conditions.length > 0 ? (
                        patient.medicalHistory.conditions.map((condition, index) => (
                          <Badge key={index} variant="destructive">
                            {condition}
                          </Badge>
                        ))
                      ) : (
                        <p className="text-sm text-muted-foreground">No conditions recorded</p>
                      )}
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-muted-foreground mb-2 block">Allergies</label>
                    <div className="flex flex-wrap gap-2">
                      {patient.medicalHistory.allergies.length > 0 ? (
                        patient.medicalHistory.allergies.map((allergy, index) => (
                          <Badge key={index} variant="secondary">
                            {allergy}
                          </Badge>
                        ))
                      ) : (
                        <p className="text-sm text-muted-foreground">No allergies recorded</p>
                      )}
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-muted-foreground mb-2 block">Current Medications</label>
                    <div className="flex flex-wrap gap-2">
                      {patient.medicalHistory.medications.length > 0 ? (
                        patient.medicalHistory.medications.map((medication, index) => (
                          <Badge key={index} variant="outline">
                            {medication}
                          </Badge>
                        ))
                      ) : (
                        <p className="text-sm text-muted-foreground">No medications recorded</p>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Insurance Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <ShieldCheckIcon className="h-5 w-5 mr-2" />
                  Insurance Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">Provider</label>
                    <p className="text-sm">{patient.insurance.provider}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">Policy Number</label>
                    <p className="text-sm font-mono">{patient.insurance.policyNumber}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">Group Number</label>
                    <p className="text-sm font-mono">{patient.insurance.groupNumber}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Emergency Contact */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <ExclamationTriangleIcon className="h-5 w-5 mr-2 text-red-600" />
                  Emergency Contact
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">Name</label>
                    <p className="text-sm">{patient.emergencyContact.name}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">Relationship</label>
                    <p className="text-sm">{patient.emergencyContact.relationship}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">Phone</label>
                    <p className="text-sm">{patient.emergencyContact.phone}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Visit History */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CalendarIcon className="h-5 w-5 mr-2 text-green-600" />
                  Visit History
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">Last Visit</label>
                    <p className="text-sm">{formatDate(patient.lastVisit)}</p>
                  </div>
                  {patient.nextAppointment && (
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">Next Appointment</label>
                      <p className="text-sm text-blue-600 font-medium">{formatDate(patient.nextAppointment)}</p>
                    </div>
                  )}
                  <Button variant="outline" className="w-full">
                    Schedule Appointment
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <EyeIcon className="h-4 w-4 mr-2" />
                    View Medical Records
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <ChatBubbleLeftRightIcon className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <ArrowDownTrayIcon className="h-4 w-4 mr-2" />
                    Download Records
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
} 