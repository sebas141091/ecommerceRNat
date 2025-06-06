
import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';
import { auth } from '../../firebase/config'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    signup: builder.mutation({
      async queryFn({ email, password }) {
        try {
          const userCredential = await createUserWithEmailAndPassword(auth, email, password);
          const user = {
            email: userCredential.user.email,
          };
          return { data: user };
        } catch (error) {
          return { error: { message: error.message, code: error.code } };
        }
      },
    }),
    login: builder.mutation({
      async queryFn({ email, password }) {
        try {
          const userCredential = await signInWithEmailAndPassword(auth, email, password);
          const user = {
            email: userCredential.user.email,
          };
          return { data: user };

        } catch (error) {
          return { error: { message: error.message, code: error.code } };
        }
      },
    }),
  }),
});

export const { useSignupMutation, useLoginMutation } = authApi;
