import React, { useState } from 'react';
import { 
  Search, MapPin, Briefcase, Bell, Settings, 
  Star, ThumbsUp, ThumbsDown, ChevronDown
} from 'lucide-react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const JobPortal = () => {
  const [activeTab, setActiveTab] = useState('search');
  const [searchParams, setSearchParams] = useState({
    jobType: '',
    location: '',
    experienceLevel: 'all'
  });
  const [recommendations, setRecommendations] = useState([{
    id: 1,
    title: 'Senior Frontend Engineer',
    company: 'TechCorp',
    location: 'Remote',
    salary: '$130k-160k',
    matchScore: 95,
    skills: ['React', 'TypeScript', 'GraphQL']
  }]);

  const applicationData = [
    { week: 'Week 1', applications: 12, responses: 3 },
    { week: 'Week 2', applications: 15, responses: 5 },
    { week: 'Week 3', applications: 8, responses: 4 }
  ];

  const userProfile = {
    savedSearches: [
      { query: 'Frontend Developer', location: 'Remote' },
      { query: 'React Engineer', location: 'San Francisco' }
    ],
    notifications: {
      email: true,
      frequency: 'daily'
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setActiveTab('search')}
          className={`px-4 py-2 rounded-lg ${activeTab === 'search' ? 'bg-blue-600 text-white' : 'bg-gray-100'}`}
        >
          Search Jobs
        </button>
        <button
          onClick={() => setActiveTab('profile')}
          className={`px-4 py-2 rounded-lg ${activeTab === 'profile' ? 'bg-blue-600 text-white' : 'bg-gray-100'}`}
        >
          Profile
        </button>
        <button
          onClick={() => setActiveTab('analytics')}
          className={`px-4 py-2 rounded-lg ${activeTab === 'analytics' ? 'bg-blue-600 text-white' : 'bg-gray-100'}`}
        >
          Analytics
        </button>
      </div>

      {activeTab === 'search' && (
        <>
          <Card className="mb-6">
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="relative">
                  <Briefcase className="absolute left-3 top-3 text-gray-400" size={20} />
                  <input
                    type="text"
                    className="w-full pl-10 p-2 border rounded-lg"
                    placeholder="Job Title or Keywords"
                    value={searchParams.jobType}
                    onChange={e => setSearchParams({...searchParams, jobType: e.target.value})}
                  />
                </div>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 text-gray-400" size={20} />
                  <input
                    type="text"
                    className="w-full pl-10 p-2 border rounded-lg"
                    placeholder="Location"
                    value={searchParams.location}
                    onChange={e => setSearchParams({...searchParams, location: e.target.value})}
                  />
                </div>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 flex items-center justify-center gap-2">
                  <Search size={20} />
                  Search
                </button>
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Recommended Jobs</CardTitle>
              </CardHeader>
              <CardContent>
                {recommendations.map(job => (
                  <div key={job.id} className="border-b last:border-0 pb-4 mb-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-semibold">{job.title}</h3>
                        <div className="flex items-center gap-2 text-gray-600 mt-1">
                          <Briefcase size={16} />
                          <span>{job.company}</span>
                          <MapPin size={16} />
                          <span>{job.location}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="text-yellow-400" size={20} />
                        <span className="font-semibold">{job.matchScore}% Match</span>
                      </div>
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {job.skills.map((skill, i) => (
                        <span key={i} className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                    <div className="mt-4 flex justify-between items-center">
                      <span className="text-lg font-medium text-blue-600">{job.salary}</span>
                      <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
                        Apply Now
                      </button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </>
      )}

      {activeTab === 'analytics' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Application Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={applicationData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="week" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="applications" stroke="#2563eb" />
                    <Line type="monotone" dataKey="responses" stroke="#16a34a" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quick Stats</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600">35</div>
                  <div className="text-sm text-gray-600">Applications</div>
                </div>
                <div className="p-4 bg-green-50 rounded-lg">
                  <div className="text-3xl font-bold text-green-600">12</div>
                  <div className="text-sm text-gray-600">Responses</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {activeTab === 'profile' && (
        <Card>
          <CardHeader>
            <CardTitle>Profile & Preferences</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h3 className="font-medium mb-2">Saved Searches</h3>
                <div className="space-y-2">
                  {userProfile.savedSearches.map((search, i) => (
                    <div key={i} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <div>
                        <div className="font-medium">{search.query}</div>
                        <div className="text-sm text-gray-500">{search.location}</div>
                      </div>
                      <button className="text-blue-600 hover:underline">Edit</button>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-2">Notification Settings</h3>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Bell size={20} />
                    <span>Email Notifications</span>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" checked={userProfile.notifications.email} />
                    <div className="w-11 h-6 bg-gray-200 peer-checked:bg-blue-600 rounded-full peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all" />
                  </label>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default JobPortal;
