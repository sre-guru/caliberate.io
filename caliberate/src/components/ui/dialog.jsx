"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

const Dialog = ({ children, open = false, onOpenChange }) => {
  const [isOpen, setIsOpen] = React.useState(open);

  React.useEffect(() => {
    setIsOpen(open);
  }, [open]);

  const handleBackdropClick = () => {
    setIsOpen(false);
    onOpenChange?.(false);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center sm:items-center"
      onClick={handleBackdropClick}
    >
      <div className="fixed inset-0 bg-black/50 transition-opacity" />
      <div
        className="z-50 flex min-h-[150px] w-full flex-col gap-4 rounded-b-lg border bg-background p-6 shadow-lg animate-in data-[state=open]:fade-in-90 data-[state=open]:slide-in-from-bottom-10 sm:max-w-lg sm:rounded-lg"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

const DialogContent = ({ children, className, ...props }) => {
  return (
    <div
      className={cn(
        "relative flex flex-col gap-4 bg-gray-900 text-white",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

const DialogHeader = ({ children, className, ...props }) => {
  return (
    <div
      className={cn("flex flex-col gap-1.5 text-center sm:text-left", className)}
      {...props}
    >
      {children}
    </div>
  );
};

const DialogTitle = ({ children, className, ...props }) => {
  return (
    <h3
      className={cn("text-lg font-semibold leading-none", className)}
      {...props}
    >
      {children}
    </h3>
  );
};

const DialogDescription = ({ children, className, ...props }) => {
  return (
    <p
      className={cn("text-sm text-gray-400", className)}
      {...props}
    >
      {children}
    </p>
  );
};

export {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription
};