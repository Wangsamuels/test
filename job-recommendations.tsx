import React from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const AnalyticsDashboard = () => {
  const applicationData = [
    { week: 'Week 1', applications: 12, responses: 3 },
    { week: 'Week 2', applications: 15, responses: 5 },
    { week: 'Week 3', applications: 8, responses: 4 },
    { week: 'Week 4', applications: 20, responses: 7 }
  ];

  const trendingRoles = [
    { role: 'Software Engineer', count: 245 },
    { role: 'Product Manager', count: 180 },
    { role: 'Data Scientist', count: 165 },
    { role: 'UX Designer', count: 120 }
  ];

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Application Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={applicationData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="week" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="applications" stroke="#2563eb" />
                <Line type="monotone" dataKey="responses" stroke="#16a34a" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Trending Job Roles</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={trendingRoles}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="role" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count" fill="#3b82f6" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Stats</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <div className="text-3xl font-bold text-blue-600">55</div>
                <div className="text-sm text-gray-600">Total Applications</div>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <div className="text-3xl font-bold text-green-600">19</div>
                <div className="text-sm text-gray-600">Responses Received</div>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg">
                <div className="text-3xl font-bold text-purple-600">34.5%</div>
                <div className="text-sm text-gray-600">Response Rate</div>
              </div>
              <div className="p-4 bg-orange-50 rounded-lg">
                <div className="text-3xl font-bold text-orange-600">5</div>
                <div className="text-sm text-gray-600">Interviews Scheduled</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { action: 'Applied to Senior Developer at Tech Co', date: '2 hours ago' },
                { action: 'Received response from Data Corp', date: '1 day ago' },
                { action: 'Interview scheduled with AI Startup', date: '2 days ago' }
              ].map((activity, index) => (
                <div key={index} className="flex justify-between items-center border-b pb-2">
                  <span className="text-gray-800">{activity.action}</span>
                  <span className="text-sm text-gray-500">{activity.date}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;
