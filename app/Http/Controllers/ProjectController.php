<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Project;

class ProjectController extends Controller
{
    public function index()
    {
        $projects = Project::where('is_completed', false)
                            ->orderBy('created_at', 'desc')
                            ->withCount(['tasks' => function ($query) {
                                $query->where('is_completed', false);
                            }])
                            ->get();
        
        return $projects->toJson();
    }

    public function store(Request $request)
    {
        $validateDate = $request->validate([
            'name' => 'required',
            'description' => 'required'
        ]);

        Project::create([
            'name' => $validateDate['name'],
            'description' => $validateDate['description']
        ]);

        return response()->json('Projected created');
    }

    public function show($id)
    {   $project = Project::with(['tasks' => function ($query) {
            $query->where('is_completed', false);
        }])->find($id);

        return $project->toJson();
    }

    public function markAsCompleted(Project $project)
    {
        $project->is_completed = true;
        $project->update();

        return response()->json('Project Updated');
    }

}
