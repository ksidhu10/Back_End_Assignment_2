import Joi from 'joi';
import employeeValidationSchema from '../src/api/v1/schemas/employee';
import { branchValidationSchema } from '../src/api/v1/schemas/branch';

describe('Validation Schemas', () => {
  // Employee Schema Validation Tests
  describe('Employee Schema Validation', () => {
    it('should pass for valid employee data', () => {
      const validEmployee = {
        name: 'John Doe',
        position: 'Software Engineer',
        email: 'john.doe@example.com',
        branchId: 'branch123',
      };
      const { error } = employeeValidationSchema.validate(validEmployee);
      expect(error).toBeUndefined(); // No validation error
    });
    it('should fail if employee name is too short', () => {
      const invalidEmployee = {
        name: 'Jo', // Invalid name (too short)
        position: 'Software Engineer',
        email: 'john.doe@example.com',
        branchId: 'branch123',
      };
      const { error } = employeeValidationSchema.validate(invalidEmployee);
      expect(error).toBeDefined(); // Validation error expected
      expect(error?.details[0].message).toContain('name'); // The error should be about the 'name'
    });
    it('should fail if employee email is invalid', () => {
      const invalidEmployee = {
        name: 'John Doe',
        position: 'Software Engineer',
        email: 'invalid-email', // Invalid email format
        branchId: 'branch123',
      };
      const { error } = employeeValidationSchema.validate(invalidEmployee);
      expect(error).toBeDefined(); // Validation error expected
      expect(error?.details[0].message).toContain('email'); // The error should be about the 'email'
    });
    it('should fail if employee branchId is missing', () => {
      const invalidEmployee = {
        name: 'John Doe',
        position: 'Software Engineer',
        email: 'john.doe@example.com',
        // branchId is missing
      };
      const { error } = employeeValidationSchema.validate(invalidEmployee);
      expect(error).toBeDefined(); // Validation error expected
      expect(error?.details[0].message).toContain('branchId'); // The error should be about the 'branchId'
    });
  });
  // Branch Schema Validation Tests
  describe('Branch Schema Validation', () => {
    it('should pass for valid branch data', () => {
      const validBranch = {
        name: 'Main Branch',
        address: '123 Main St, City, Country',
        phone: '1234567890',
      };
      const { error } = branchValidationSchema.validate(validBranch);
      expect(error).toBeUndefined(); // No validation error
    });
    it('should fail if branch name is too short', () => {
      const invalidBranch = {
        name: 'Br', // Invalid branch name (too short)
        address: '123 Main St, City, Country',
        phone: '1234567890',
      };
      const { error } = branchValidationSchema.validate(invalidBranch);
      expect(error).toBeDefined(); // Validation error expected
      expect(error?.details[0].message).toContain('name'); // The error should be about the 'name'
    });
    it('should fail if branch address is too short', () => {
      const invalidBranch = {
        name: 'Main Branch',
        address: 'Short', // Invalid address (too short)
        phone: '1234567890',
      };
      const { error } = branchValidationSchema.validate(invalidBranch);
      expect(error).toBeDefined(); // Validation error expected
      expect(error?.details[0].message).toContain('address'); // The error should be about the 'address'
    });
    it('should fail if branch phone is invalid', () => {
      const invalidBranch = {
        name: 'Main Branch',
        address: '123 Main St, City, Country',
        phone: '12345', // Invalid phone number (too short)
      };
      const { error } = branchValidationSchema.validate(invalidBranch);
      expect(error).toBeDefined(); // Validation error expected
      expect(error?.details[0].message).toContain('phone'); // The error should be about the 'phone'
    });
  });
});