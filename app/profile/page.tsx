'use client'
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useUser } from '@clerk/nextjs';
import {DotLoader} from 'react-spinners'
type RequestData = {
  confidence: number;
  created_at: string;
  diabetes: string;
  dob: string;
  email: string;
  gender: string;
  hypertension: string;
  id: string;
  image_path: string;
  mobile: string;
  name: string;
  prediction: string;
  prevDiseases: string;
  symptoms: string;
};

const Profile = () => {
  const { user } = useUser();
  const userId = user?.id as string;

  const [result, setResult] = useState<RequestData[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:5000/get_user_data?id=${userId}`, {
          method: 'GET'
        });

        if (response.ok) {
          const data: RequestData[] = await response.json();
          setResult(data);
        } else {
          const errorData = await response.json();
          console.error('Error fetching data:', errorData.error);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    if (userId) {
      fetchData();
    }
  }, [userId]);

  if (loading) {
    return <section className='flex justify-center items-center h-[100vh]'>
        <DotLoader color='#033850' />
    </section>
  }

  if (!result || result.length === 0) {
    return (
      <section className="container p-10">
        <div className="text-4xl font-bold my-5">
          No diagnostic history found for you.
        </div>
        <div className="text-lg mb-5">
          Start with your first diagnosis by clicking&nbsp;
          <Link href="/diagnosis">
            <p className="text-blue-500 underline">here</p>
          </Link>.
        </div>
      </section>
    );
  }
  const formatImagePath = (path: string) => {
    const normalizedPath = path.replace(/\\/g, '/');
    const parts = normalizedPath.split('/');
    const filename = parts[parts.length - 1];  
    return filename;
  };

  return (
    <section className='container p-20'>
      <div className="text-4xl font-bold my-5 mb-10">
        Access Your Diagnostic History.
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {result.map((item, index) => (
          <Card key={index} className="bg-white shadow-2xl rounded-lg overflow-hidden my-10">
            <CardHeader className="bg-gray-200 p-8">
              <CardTitle className="text-2xl font-semibold text-gray-800">{item.name}</CardTitle>
              <CardDescription className="text-sm text-gray-600">{item.created_at}</CardDescription>
            </CardHeader>
            <CardContent className="p-6 flex flex-col gap-5">
              {item.image_path && (
                <img src={`/assets/${formatImagePath(item.image_path)}`} alt={item.name} className="w-32 h-32 mb-4 rounded-lg" />
              )}
              <p className="text-base text-gray-700"><strong>Prediction:</strong> {item.prediction}</p>
              <p className="text-base text-gray-700"><strong>Confidence:</strong> {item.confidence}%</p>
              <p className="text-base text-gray-700"><strong>Symptoms:</strong> {item.symptoms}</p>
              <p className="text-base text-gray-700"><strong>Previous Diseases:</strong> {item.prevDiseases}</p>
              <p className="text-base text-gray-700"><strong>Diabetes:</strong> {item.diabetes}</p>
              <p className="text-base text-gray-700"><strong>Hypertension:</strong> {item.hypertension}</p>
            </CardContent>
            <CardFooter className="bg-gray-200 p-4 flex flex-col justify-start items-start gap-5">
              <p className="text-sm text-gray-600"><strong>Email:</strong> {item.email}</p>
              <p className="text-sm text-gray-600"><strong>Mobile:</strong> {item.mobile}</p>
              <p className="text-sm text-gray-600"><strong>Gender:</strong> {item.gender}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Profile;
