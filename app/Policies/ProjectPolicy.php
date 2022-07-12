<?php

namespace App\Policies;

use App\Models\Project;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;
use Illuminate\Auth\Access\Response;

class ProjectPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view any models.
     *
     * @param User $user
     * @return Response
     */
    public function viewAny(User $user): Response
    {
        return
            $user->roles()->where('title', 'Administrator')->exists() ?
                Response::allow() :
                Response::deny('Don`t have enough rights');
    }

    /**
     * Determine whether the user can view the model.
     *
     * @param User $user
     * @param Project $project
     * @return Response
     */
    public function view(User $user, Project $project): Response
    {
        return
            $user->roles()->where('title', 'Administrator')->exists() ||
            $user->id === $project->owner_id ||
            $project->participants->contains($user->id) ?
                Response::allow() :
                Response::deny('To view this project you must be Administrator / Owner / Participant');
    }

    /**
     * Determine whether the user can create models.
     *
     * @param User $user
     * @return Response
     */
    public function create(User $user): Response
    {
        return $user->roles()->whereIn('title', ['Administrator', 'Manager'])->exists() ?
            Response::allow() :
            Response::deny('To create project you must be Administrator / Manager');
    }

    /**
     * Determine whether the user can update the model.
     *
     * @param User $user
     * @param Project $project
     * @return Response
     */
    public function update(User $user, Project $project): Response
    {
        return
            $user->roles()->whereIn('title', ['Administrator', 'Manager'])->exists() ||
            $user->id === $project->owner_id ?
                Response::allow() :
                Response::deny('To view this project you must be Administrator / Manager / Owner');
    }

    /**
     * Determine whether the user can delete the model.
     *
     * @param User $user
     * @param Project $project
     * @return Response
     */
    public function delete(User $user, Project $project): Response
    {
        return
            $user->roles()->whereIn('title', ['Administrator'])->exists() ||
            $user->id === $project->owner_id ?
                Response::allow() :
                Response::deny('To delete project you must be Administrator / Owner');
    }

    /**
     * Determine whether the user can restore the model.
     *
     * @param User $user
     * @param Project $project
     * @return void
     */
    public function restore(User $user, Project $project)
    {
        //
    }

    /**
     * Determine whether the user can permanently delete the model.
     *
     * @param User $user
     * @param Project $project
     * @return void
     */
    public function forceDelete(User $user, Project $project)
    {
        //
    }
}
