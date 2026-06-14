export interface ValidationErrors {
  [key: string]: string;
}

export function validateContactForm(data: Record<string, string>): ValidationErrors {
  const errors: ValidationErrors = {};

  if (!data.name?.trim()) errors.name = 'Name is required';
  else if (data.name.trim().length < 2) errors.name = 'Name must be at least 2 characters';

  if (!data.email?.trim()) errors.email = 'Email is required';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.email = 'Invalid email address';

  if (!data.subject?.trim()) errors.subject = 'Subject is required';
  if (!data.message?.trim()) errors.message = 'Message is required';
  else if (data.message.trim().length < 10) errors.message = 'Message must be at least 10 characters';

  return errors;
}

export function validateVolunteerForm(data: Record<string, string>): ValidationErrors {
  const errors: ValidationErrors = {};

  if (!data.name?.trim()) errors.name = 'Name is required';
  if (!data.email?.trim()) errors.email = 'Email is required';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.email = 'Invalid email address';

  if (!data.phone?.trim()) errors.phone = 'Phone number is required';
  else if (!/^\d{10}$/.test(data.phone.replace(/[\s\-()]/g, ''))) errors.phone = 'Invalid phone number';

  if (!data.area?.trim()) errors.area = 'Please select an area of interest';
  if (!data.availability?.trim()) errors.availability = 'Please specify your availability';

  return errors;
}

export function validateInternshipForm(data: Record<string, string>): ValidationErrors {
  const errors: ValidationErrors = {};

  if (!data.name?.trim()) errors.name = 'Name is required';
  if (!data.email?.trim()) errors.email = 'Email is required';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.email = 'Invalid email address';

  if (!data.phone?.trim()) errors.phone = 'Phone number is required';
  if (!data.position?.trim()) errors.position = 'Please select a position';

  if (!data.qualification?.trim()) errors.qualification = 'Please enter your qualification';
  if (!data.message?.trim()) errors.message = 'Please tell us why you are interested';
  else if (data.message.trim().length < 20) errors.message = 'Please provide more detail (at least 20 characters)';

  return errors;
}
