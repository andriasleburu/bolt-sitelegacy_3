"use client"

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Events = () => {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Events</h1>
      <Card>
        <CardHeader>
          <CardTitle>Events Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <p>This is the Events page. Here you can view and manage various events related to World Heritage Sites.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Events;