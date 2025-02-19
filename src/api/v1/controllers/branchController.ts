import { Request, Response, NextFunction } from 'express';
import * as branchService from '../services/branchServices';

// Create a new branch
export const createBranch = async (req: Request, res: Response, next: NextFunction): Promise<Response> => {
  try {
    const branch = await branchService.createBranch(req.body);
    return res.status(201).json(branch); // Respond with the newly created branch
  } catch (error) {
    next(error); // pass error to the error handler
    return res.status(500).json({ message: 'Error creating branch' });
  }
};

// Get all branches
export const getAllBranches = async (req: Request, res: Response, next: NextFunction): Promise<Response> => {
  try {
    const branches = await branchService.getAllBranches();
    return res.status(200).json(branches); // Respond with all branches
  } catch (error) {
    next(error); // pass error to the error handler
    return res.status(500).json({ message: 'Error fetching branches' });
  }
};

// Get a branch by ID
export const getBranchById = async (req: Request, res: Response, next: NextFunction): Promise<Response> => {
  try {
    const branch = await branchService.getBranchById(req.params.id);
    if (!branch) {
      return res.status(404).json({ message: 'Branch not found' });
    }
    return res.status(200).json(branch); // Respond with the branch details
  } catch (error) {
    next(error); // pass error to the error handler
    return res.status(500).json({ message: 'Error fetching branch' });
  }
};

// Update a branch's data
export const updateBranch = async (req: Request, res: Response, next: NextFunction): Promise<Response> => {
  try {
    const updatedBranch = await branchService.updateBranch(req.params.id, req.body);
    if (!updatedBranch) {
      return res.status(404).json({ message: 'Branch not found' });
    }
    return res.status(200).json(updatedBranch); // Respond with updated branch data
  } catch (error) {
    next(error); // pass error to the error handler
    return res.status(500).json({ message: 'Error updating branch' });
  }
};

// Delete a branch
export const deleteBranch = async (req: Request, res: Response, next: NextFunction): Promise<Response> => {
  try {
    const result = await branchService.deleteBranch(req.params.id);
    if (!result) {
      return res.status(404).json({ message: 'Branch not found' });
    }
    return res.status(200).json({ message: 'Branch deleted successfully' }); // Respond with success message
  } catch (error) {
    next(error); // pass error to the error handler
    return res.status(500).json({ message: 'Error deleting branch' });
  }
};
