import { describe, it, expect } from 'vitest';
import { capitalize } from '../utils/string';

describe('capitalize', () => {
  it('should capitalize the first letter of a string', () => {
    expect(capitalize('hello')).toBe('Hello');
  });

  it('should return an empty string if input is empty', () => {
    expect(capitalize('')).toBe('');
  });

  it('should handle strings with leading spaces', () => {
    expect(capitalize('  world')).toBe('  world');
  });

  it('should handle strings that are already capitalized', () => {
    expect(capitalize('Hello')).toBe('Hello');
  });

  it('should handle single character strings', () => {
    expect(capitalize('a')).toBe('A');
  });
});