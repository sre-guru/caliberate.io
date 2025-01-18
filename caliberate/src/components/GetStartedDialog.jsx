"use client";

import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const GetStartedDialog = ({ isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Get Started</DialogTitle>
          <DialogDescription>
            Fill out the form below to start your free trial.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium text-gray-200">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="John Doe"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-gray-200">
              Work Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="john@company.com"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="company" className="text-sm font-medium text-gray-200">
              Company Name
            </label>
            <input
              id="company"
              type="text"
              className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Company Inc."
            />
          </div>
        </div>

        <button
          className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 py-2 px-4 rounded-lg font-medium hover:from-indigo-500 hover:to-purple-500 transition-all text-white"
          onClick={onClose}
        >
          Start Free Trial
        </button>
      </DialogContent>
    </Dialog>
  );
};

export default GetStartedDialog;