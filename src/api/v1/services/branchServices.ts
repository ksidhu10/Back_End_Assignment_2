export interface Branch {
    id: number;
    name: string;
    address: string;
    phone: string;
  }
  
let branches: Branch[] = [];  

// Create a new branch
export const createBranch = async (data: { name: string; address: string; phone: string }): Promise<Branch> => {
  const newBranch: Branch = { id: branches.length + 1, ...data };
  branches.push(newBranch);
  return newBranch;
};

// Get all branches
export const getAllBranches = async (): Promise<Branch[]> => {
  return branches;
};

// Get a branch by ID
export const getBranchById = async (id: string): Promise<Branch | undefined> => {
  return branches.find(branch => branch.id === parseInt(id));
};

// Update a branch
export const updateBranch = async (id: string, data: { name?: string; address?: string; phone?: string }): Promise<Branch | undefined> => {
  const branch = branches.find(branch => branch.id === parseInt(id));
  if (branch) {
    if (data.name) branch.name = data.name;
    if (data.address) branch.address = data.address;
    if (data.phone) branch.phone = data.phone;
    return branch;
  }
  return undefined;
};

// Delete a branch
export const deleteBranch = async (id: string): Promise<Branch | undefined> => {
  const index = branches.findIndex(branch => branch.id === parseInt(id));
  if (index !== -1) {
    return branches.splice(index, 1)[0];
  }
  return undefined;
};
