import { Request, Response } from 'express';
import * as branchService from '../services/branchServices';

// Create a new branch
export const createBranch = async (req: Request, res: Response): Promise<void> => {
  try {
    const branch = await branchService.createBranch(req.body);
    res.status(201).json(branch); // Respond with the newly created branch
  } catch (error) {
    res.status(500).json({ message: 'Error creating branch', error });
  }
};

// Get all branches
export const getAllBranches = async (req: Request, res: Response): Promise<void> => {
  try {
    const branches = await branchService.getAllBranches();
    res.status(200).json(branches); // Respond with all branches
  } catch (error) {
    res.status(500).json({ message: 'Error fetching branches', error });
  }
};

// Get a branch by ID
export const getBranchById = async (req: Request, res: Response): Promise<void> => {
  try {
    const branch = await branchService.getBranchById(req.params.id);
    if (!branch) {
      res.status(404).json({ message: 'Branch not found' });
    }
    res.status(200).json(branch); // Respond with the branch details
  } catch (error) {
    res.status(500).json({ message: 'Error fetching branch', error });
  }
};

// Update a branch's data
export const updateBranch = async (req: Request, res: Response): Promise<void> => {
  try {
    const updatedBranch = await branchService.updateBranch(req.params.id, req.body);
    if (!updatedBranch) {
      res.status(404).json({ message: 'Branch not found' });
    }
    res.status(200).json(updatedBranch); // Respond with updated branch data
  } catch (error) {
    res.status(500).json({ message: 'Error updating branch', error });
  }
};

// Delete a branch
export const deleteBranch = async (req: Request, res: Response): Promise<void> => {
  try {
    const result = await branchService.deleteBranch(req.params.id);
    if (!result) {
      res.status(404).json({ message: 'Branch not found' });
    }
    res.status(200).json({ message: 'Branch deleted successfully' }); // Respond with success message
  } catch (error) {
    res.status(500).json({ message: 'Error deleting branch', error });
  }
};
