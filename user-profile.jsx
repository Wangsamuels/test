import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Bell, Briefcase, BookMark, Mail, Settings } from 'lucide-react';

const UserProfile = () => {
  const [profile, setProfile] = useState({
    jobPreferences: {
      roles: ['Software Engineer', 'Frontend Developer'],
      locations: ['San Francisco', 'Remote'],
      salary: '120k-180k',
      type: ['Full-time', 'Contract']
    },
    notifications: {
      email: true,
      desktop: true,
      frequency: 'daily',
      keywords: ['react', 'typescript', 'node']
    },
    savedSearches: [
      { query: 'Senior Frontend React', location: 'Remote' },
      { query: 'Full Stack Developer', location: 'San Francisco' }
    ]
  });

  const [activeTab, setActiveTab] = useState('preferences');

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="flex gap-4">
        <div className="w-64 space-y-2">
          <button
            onClick={() => setActiveTab('preferences')}
            className={`w-full text-left p-3 rounded-lg flex items-center gap-2 
              ${activeTab === 'preferences' ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50'}`}
          >
            <Settings size={20} />
            <span>Preferences</span>
          </button>
          <button
            onClick={() => setActiveTab('notifications')}
            className={`w-full text-left p-3 rounded-lg flex items-center gap-2
              ${activeTab === 'notifications' ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50'}`}
          >
            <Bell size={20} />
            <span>Notifications</span>
          </button>
          <button
            onClick={() => setActiveTab('saved')}
            className={`w-full text-left p-3 rounded-lg flex items-center gap-2
              ${activeTab === 'saved' ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50'}`}
          >
            <BookMark size={20} />
            <span>Saved Searches</span>
          </button>
        </div>

        <div className="flex-1">
          {activeTab === 'preferences' && (
            <Card>
              <CardHeader>
                <CardTitle>Job Preferences</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Desired Roles</label>
                    <div className="flex flex-wrap gap-2">
                      {profile.jobPreferences.roles.map((role, index) => (
                        <span key={index} className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
                          {role}
                        </span>
                      ))}
                      <button className="text-blue-600 text-sm hover:underline">+ Add Role</button>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Preferred Locations</label>
                    <div className="flex flex-wrap gap-2">
                      {profile.jobPreferences.locations.map((location, index) => (
                        <span key={index} className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
                          {location}
                        </span>
                      ))}
                      <button className="text-blue-600 text-sm hover:underline">+ Add Location</button>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Expected Salary Range</label>
                    <input
                      type="text"
                      className="w-full p-2 border rounded-lg"
                      value={profile.jobPreferences.salary}
                      onChange={e => setProfile({
                        ...profile,
                        jobPreferences: { ...profile.jobPreferences, salary: e.target.value }
                      })}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {activeTab === 'notifications' && (
            <Card>
              <CardHeader>
                <CardTitle>Notification Settings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Mail size={20} />
                      <span>Email Notifications</span>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" checked={profile.notifications.email} />
                      <div className="w-11 h-6 bg-gray-200 peer-checked:bg-blue-600 rounded-full peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all" />
                    </label>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Notification Frequency</label>
                    <select
                      className="w-full p-2 border rounded-lg"
                      value={profile.notifications.frequency}
                      onChange={e => setProfile({
                        ...profile,
                        notifications: { ...profile.notifications, frequency: e.target.value }
                      })}
                    >
                      <option value="instant">Instant</option>
                      <option value="daily">Daily Digest</option>
                      <option value="weekly">Weekly Summary</option>
                    </select>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {activeTab === 'saved' && (
            <Card>
              <CardHeader>
                <CardTitle>Saved Searches</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {profile.savedSearches.map((search, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <div className="font-medium">{search.query}</div>
                        <div className="text-sm text-gray-500">{search.location}</div>
                      </div>
                      <div className="flex gap-2">
                        <button className="text-blue-600 hover:underline">Edit</button>
                        <button className="text-red-600 hover:underline">Delete</button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
