"use client"

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Members = () => {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Members</h1>
      <Card>
        <CardHeader>
          <CardTitle>Members Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <p>This is the Members page. Here you can view and manage members involved in World Heritage Site preservation.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Members;