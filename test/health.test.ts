import request from 'supertest';
import app from '../src/app';  // Importing the app from your app.ts file

describe('GET /health', () => {
  it('should return 200 OK', async () => {
    const response = await request(app).get("/health");

    expect(response.status).toBe(200);
    expect(response.body.message).toBe("Server is healthy");  // Checking for the "message" key
  });
});
