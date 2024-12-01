import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, MapPin, Star, ThumbsUp, ThumbsDown } from 'lucide-react';

const JobRecommendations = () => {
  const [recommendations, setRecommendations] = useState([
    {
      id: 1,
      title: 'Senior Frontend Engineer',
      company: 'TechCorp',
      location: 'Remote',
      salary: '$130k-160k',
      matchScore: 95,
      skills: ['React', 'TypeScript', 'GraphQL'],
      reason: 'Matches your experience with React and TypeScript',
    },
    {
      id: 2,
      title: 'Full Stack Developer',
      company: 'StartupCo',
      location: 'San Francisco',
      salary: '$140k-170k',
      matchScore: 88,
      skills: ['Node.js', 'React', 'MongoDB'],
      reason: 'Similar to roles you previously applied to',
    }
  ]);

  const handleFeedback = (jobId, isPositive) => {
    setRecommendations(prev => 
      prev.map(job => 
        job.id === jobId 
          ? { ...job, userFeedback: isPositive } 
          : job
      )
    );
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Personalized Job Matches</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recommendations.map(job => (
              <div key={job.id} className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold">{job.title}</h3>
                    <div className="flex items-center gap-2 text-gray-600 mt-1">
                      <Briefcase size={16} />
                      <span>{job.company}</span>
                      <MapPin size={16} className="ml-2" />
                      <span>{job.location}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="text-yellow-400" size={20} />
                    <span className="font-semibold text-lg">{job.matchScore}%</span>
                  </div>
                </div>

                <div className="mt-3">
                  <div className="flex flex-wrap gap-2">
                    {job.skills.map((skill, index) => (
                      <span key={index} className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-3 text-gray-600">
                  <strong>Why this match:</strong> {job.reason}
                </div>

                <div className="mt-4 flex justify-between items-center">
                  <div className="text-lg font-medium text-blue-600">
                    {job.salary}
                  </div>
                  <div className="flex gap-4">
                    <div className="flex gap-2">
                      <button 
                        onClick={() => handleFeedback(job.id, true)}
                        className="p-2 rounded-full hover:bg-gray-100"
                      >
                        <ThumbsUp size={20} className={job.userFeedback === true ? 'text-green-600' : 'text-gray-400'} />
                      </button>
                      <button 
                        onClick={() => handleFeedback(job.id, false)}
                        className="p-2 rounded-full hover:bg-gray-100"
                      >
                        <ThumbsDown size={20} className={job.userFeedback === false ? 'text-red-600' : 'text-gray-400'} />
                      </button>
                    </div>
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default JobRecommendations;
