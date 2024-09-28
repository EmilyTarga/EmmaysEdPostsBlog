'use server';
 
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod';
import { auth, signIn } from '../auth';
import { AuthError } from 'next-auth';

const FormSchema  = z.object({
  title: z.string(),
  content: z.string(),
  subject: z.string(),
  author: z.string(),
});


export async function createPost(formData: FormData) {
    const { title, content, subject, author } = FormSchema.parse({
    title: formData.get('title'),
    content: formData.get('content'),
    subject: formData.get('subject'),
    author: formData.get('author'),
  });

  const response = await fetch(`${process.env.API_URI}/posts`, {
  headers: {
    "Content-Type": "application/json",
  },
  method: "POST",
  body: JSON.stringify({ title, content, subject, author }),
  });

  revalidatePath('/home');
  redirect('/home');
}

export async function updatePost(id: string, formData: FormData) {
    const { title, content, subject, author } = FormSchema.parse({
    title: formData.get('title'),
    content: formData.get('content'),
    subject: formData.get('subject'),
    author: formData.get('author'),
  });

  const response = await fetch(`${process.env.API_URI}/posts/${id}`, {
  headers: {
    "Content-Type": "application/json",
  },
  method: "PUT",
  body: JSON.stringify({ title, content, subject, author }),
  });

  revalidatePath('/home');
  redirect('/home');
}

export async function deletePost(id: string) {
  const response = await fetch(`${process.env.API_URI}/posts/${id}`, {
  headers: {
    "Content-Type": "application/json",
  },
  method: "DELETE",
  });

  revalidatePath('/home');
  redirect('/home');

}

export async function authenticate(
  formData: FormData,
) {
  try {
    let user = await signIn('credentials', formData);
    return user;
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}
