import React from 'react';
import {
  FileText, Users, Code, ClipboardCheck, UserCheck, Search,
  GitPullRequest, GitMerge, PlayCircle, Lock, CheckCircle, Settings
} from 'lucide-react';

const PipelineStage = ({ title, description, icon: Icon, status = "success", type = "ci", yaml }) => {
  const typeStyles = {
    ci: "border-blue-500/30 bg-blue-900/20",
    approval: "border-yellow-500/30 bg-yellow-900/20",
    cd: "border-green-500/30 bg-green-900/20"
  };

  const statusColors = {
    success: "text-green-400",
    pending: "text-yellow-400",
    running: "text-blue-400"
  };

  return (
    <div className={`p-4 border rounded-lg ${typeStyles[type]}`}>
      <div className="flex items-start gap-3 mb-3">
        <div className="p-2 rounded-lg bg-gray-800 flex-shrink-0">
          <Icon className={`w-5 h-5 ${statusColors[status]}`} />
        </div>
        <div className="min-w-0">
          <h4 className="text-sm font-medium text-gray-200">{title}</h4>
          <p className="text-xs text-gray-400 mt-1">{description}</p>
        </div>
      </div>
      {yaml && (
        <div className="mt-2 bg-gray-900 rounded p-3 max-h-48 overflow-y-auto">
          <pre className="text-xs text-gray-400 whitespace-pre-wrap">{yaml}</pre>
        </div>
      )}
    </div>
  );
};

const ParallelPipelines = () => {
  return (
    <div className="w-full bg-black py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Select Your Pipeline
          </h2>
          <div className="inline-flex items-center gap-2 bg-gray-800 rounded-lg p-2">
            <GitPullRequest className="w-5 h-5 text-blue-400" />
            <span className="text-gray-200">Which pipeline would you like to run?</span>
          </div>
        </div>

        <div className="border border-gray-700 rounded-lg bg-gray-900/50">
          {/* Pipeline Headers */}
          <div className="grid grid-cols-2 divide-x divide-gray-700">
            <div className="p-4 flex items-center gap-2">
              <Settings className="text-blue-400" />
              <h3 className="text-lg font-medium text-white">Evaluation Pipeline</h3>
            </div>
            <div className="p-4 flex items-center gap-2">
              <Settings className="text-purple-400" />
              <h3 className="text-lg font-medium text-white">Search Pipeline</h3>
            </div>
          </div>

          {/* Pipeline Content */}
          <div className="grid grid-cols-2 divide-x divide-gray-700 relative">
            {/* OR Separator */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="bg-gray-800 rounded-full p-3 border-2 border-gray-700">
                <span className="text-gray-400 font-bold">OR</span>
              </div>
            </div>
            <div className="p-6 space-y-8">
              {/* Pipeline 1 Stages */}
              <PipelineStage
                icon={FileText}
                title="Build Init"
                description="Configure evaluation parameters"
                type="ci"
                status="success"
                yaml={`steps:
  - name: configure
    params:
      role: Senior Developer
      skills: [React, Node.js]
      experience: 5+ years
      evaluation_type: technical
  - name: setup_tests
    include:
      - coding_exercise
      - system_design
      - technical_interview`}
              />
              <PipelineStage
                icon={Users}
                title="Receive Candidates"
                description="Process pre-selected candidates"
                type="ci"
                status="success"
                yaml={`input:
  source: client_provided
  format: resume_pdf
  validation:
    required_fields:
      - contact_info
      - experience
      - skills
  process:
    - validate_documents
    - create_candidate_profile
    - schedule_assessment`}
              />
              <PipelineStage
                icon={Code}
                title="Run Assessment"
                description="Execute evaluation suite"
                type="ci"
                status="running"
                yaml={`assessment:
  stages:
    - technical_screening:
        duration: 60m
        topics: [algorithms, system_design]
    - coding_challenge:
        duration: 120m
        languages: [javascript, python]
    - architecture_review:
        duration: 45m
        focus: [scalability, security]`}
              />
            </div>

            <div className="p-6 space-y-8">
              {/* Pipeline 2 Stages */}
              <PipelineStage
                icon={FileText}
                title="Build Init"
                description="Configure search parameters"
                type="ci"
                status="success"
                yaml={`steps:
  - name: configure_search
    params:
      role: Senior Developer
      skills: [React, Node.js]
      experience: 5+ years
      location: [remote, onsite]
  - name: setup_filters
    criteria:
      - skill_match: 80%
      - experience_match: 90%
      - availability: immediate`}
              />
              <PipelineStage
                icon={Search}
                title="Source Candidates"
                description="Market search for matching talent"
                type="ci"
                status="success"
                yaml={`search:
  sources:
    - talent_network
    - linkedin_recruiter
    - github_profiles
  filters:
    skills_required: true
    experience_match: true
    location_match: true
  output:
    - candidate_profiles
    - initial_screening_results`}
              />
              <PipelineStage
                icon={Code}
                title="Run Assessment"
                description="Execute evaluation suite"
                type="ci"
                status="running"
                yaml={`assessment:
  stages:
    - technical_screening:
        duration: 60m
        topics: [algorithms, system_design]
    - coding_challenge:
        duration: 120m
        languages: [javascript, python]
    - architecture_review:
        duration: 45m
        focus: [scalability, security]`}
              />
            </div>
          </div>

          {/* Approval Gates - Now as a separate section */}
          <div className="border-t border-gray-700 mt-8">
            <div className="p-4 bg-gray-800/50">
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-yellow-400" />
                <h4 className="text-sm font-medium text-gray-200">Approval Gates</h4>
              </div>
            </div>
            <div className="grid grid-cols-2 divide-x divide-gray-700 p-6 gap-8">
              <PipelineStage
                icon={UserCheck}
                title="Quality & Client Review"
                description="Approval required to proceed"
                type="approval"
                status="pending"
                yaml={`approval_required:
  reviewers:
    - technical_lead
    - client
  checks:
    - assessment_results
    - technical_fit
    - team_fit
  response:
    type: manual
    timeout: 5 business_days`}
              />
              <PipelineStage
                icon={UserCheck}
                title="Quality & Client Review"
                description="Approval required to proceed"
                type="approval"
                status="pending"
                yaml={`approval_required:
  reviewers:
    - technical_lead
    - client
  checks:
    - candidate_quality
    - technical_fit
    - team_fit
  response:
    type: manual
    timeout: 5 business_days`}
              />
            </div>
          </div>

          {/* Deployment Stage */}
          <div className="border-t border-gray-700 mt-8">
            <div className="p-4 bg-gray-800/50">
              <div className="flex items-center gap-2">
                <GitMerge className="w-4 h-4 text-green-400" />
                <h4 className="text-sm font-medium text-gray-200">Deployment</h4>
              </div>
            </div>
            <div className="grid grid-cols-2 divide-x divide-gray-700 p-6 gap-8">
              <PipelineStage
                icon={GitMerge}
                title="Deploy to Team"
                description="Proceed with hiring process"
                type="cd"
                status="pending"
                yaml={`deploy:
  steps:
    - generate_offer
    - schedule_onboarding
    - setup_workstation
    - team_introduction
  notifications:
    - hiring_manager
    - team_lead
    - hr_department`}
              />
              <PipelineStage
                icon={GitMerge}
                title="Deploy to Team"
                description="Proceed with hiring process"
                type="cd"
                status="pending"
                yaml={`deploy:
  steps:
    - generate_offer
    - schedule_onboarding
    - setup_workstation
    - team_introduction
  notifications:
    - hiring_manager
    - team_lead
    - hr_department`}
              />
            </div>
          </div>
        </div>

        {/* Pipeline Status Legend */}
        <div className="mt-8 flex flex-wrap gap-6 justify-center">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-green-400" />
            <span className="text-sm text-gray-400">Completed</span>
          </div>
          <div className="flex items-center gap-2">
            <PlayCircle className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-gray-400">In Progress</span>
          </div>
          <div className="flex items-center gap-2">
            <Lock className="w-4 h-4 text-yellow-400" />
            <span className="text-sm text-gray-400">Pending Approval</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParallelPipelines;