"use client"

import React from 'react';
import { Bell, MessageSquare, Search, User } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/mode-toggle';

const Topbar = () => {
  return (
    <div className="flex items-center justify-between h-16 px-4 border-b bg-background">
      <div className="flex items-center flex-1">
        <div className="relative w-full max-w-xl">
          <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search..."
            className="pl-10 w-full"
          />
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <ModeToggle />
        <Button variant="ghost" size="icon">
          <MessageSquare className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon">
          <Bell className="h-5 w-5" />
        </Button>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback><User className="h-5 w-5" /></AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default Topbar;