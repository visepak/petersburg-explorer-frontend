import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ChatWindow } from './ChatWindow';
import { MessageSquare, X } from 'lucide-react';
import { cn } from '@/lib/utils';

export function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen ? (
        <Button
          onClick={() => setIsOpen(true)}
          className="rounded-full w-14 h-14 p-0 shadow-lg hover:shadow-xl transition-all duration-300"
          size="icon"
        >
          <MessageSquare className="h-6 w-6" />
        </Button>
      ) : (
        <div className={cn(
          "bg-background rounded-lg shadow-xl transition-all duration-300",
          "w-[350px] h-[500px] md:w-[400px] md:h-[600px] lg:w-[450px] lg:h-[700px]"
        )}>
          <div className="flex justify-between items-center p-2 border-b">
            <h3 className="font-semibold">Чат с гидом</h3>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="h-8 w-8"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          <div className="h-[calc(100%-40px)]">
            <ChatWindow />
          </div>
        </div>
      )}
    </div>
  );
} 