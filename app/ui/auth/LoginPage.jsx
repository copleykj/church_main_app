import { Meteor } from 'meteor/meteor';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Accounts } from 'meteor/accounts-base';
import { RoutePaths } from '../components/mainRoutes/RoutePaths';
import { useTracker } from 'meteor/react-meteor-data';
import { SignedIn } from './SignedIn';
import { ErrorAlert } from '../components/alerts/ErrorAlert';
import { SuccessAlert } from '../components/alerts/SuccessAlert';

import { object, string } from 'yup';
import { Input  } from './Input';

export const LoginPage = () =>{
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      profession: professions[0],
      age: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
              .label('Full Name')
              .required()
              .test('is-full-name', 'Please enter both your first and last name', function (value) {
                const nameArr = value.split(" ");
                return nameArr.length >= 2;
              }),
      email: Yup.string()
              .email()
              .required(),
   
    }),
    onSubmit: function (values) {
      alert(`You are registered! Name: ${values.name}. Email: ${values.email}`);
    }
  })


  const [isSignup, setIsSignup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const userId = useTracker(() => Meteor.userId());
  const navigate = useNavigate();


  const validationSchema = object({
    username: string('Enter your username').required('Username is required'),
    password: string('Enter your password').required('Password is required'),
  });

  const handleError = (error, actions) => {
    if (error) {
      const errorMessage = error?.reason || 'Sorry, please try again.';
      actions.setStatus(errorMessage);
    }
    actions.setSubmitting(false);
    navigate(RoutePaths.ADMIN);
  };

  const onSubmit = (values, actions) => {
    const { username, password } = values;
    if (isSignup) {
      Accounts.createUser({ username, password }, error => {
        handleError(error, actions);
      });
    } else {
      Meteor.loginWithPassword(username, password, error => {
        handleError(error, actions);
      });
    }
  };


  if (userId) {
    return <SignedIn />;
  }
  return (
    <div className="flex items-center justify-center">
      <div className="spacing-8 mx-auto maxW-lg py-12 px-6">
        <div className="center">
          <p className="font-4xl bg-gradient-linear(to-l, #675AAA,#4399E1)"
           
          >
            Sign in to your account
          </p>
          <p className='font-lg'>
            to start creating your simple posts
          </p>
        </div>
        <div className='rounded-lg bg-gray-500 shadow-lg p-8'
        >
            <form action="" data-aos="fade-up">
         {error && <ErrorAlert message={error} />}
              {success && <SuccessAlert message={success} />}
            <div  className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
            <div className='size-md'>
             <Input 
        id='username'
        label='Username'
        type='username'
        placeholder='Username'
        containerClassName='mt-4'
        value={username}
        onChange={e => setUsername(e.target.value)}
        />
                <div className='size-md'>

         <Input 
        id='password'
        label='Password'
        type='Password'
        placeholder='password'
        containerClassName='mt-4'
        value={password}
        onChange={e => setPassword(e.target.value)}
        />
                  <div className='width-4.5rem'>
                    <button
                               className='mt-4 py-2 px-3 font-serif font-medium text-[18px] text-white bg-tertiaryOne rounded-[10px] outline-none hover:text-white hover:bg-opacity-40 transition ease-in-out duration-150'
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? 'Hide' : 'Show'}
                    </button>
                  </div>
                </div>
               
              </div>
              {!isSignup && (
                <>
                  <div>
                    <button
                        className='mt-4 py-2 px-3 font-serif font-medium text-[18px] text-white bg-tertiaryOne rounded-[10px] outline-none hover:text-white hover:bg-opacity-40 transition ease-in-out duration-150'
                        onClick={saveUser}
                    >
                      Sign in
                    </button>
                  </div>
                  <div>
                    <button onClick={() => setIsSignup(true)}>
                      Create a new account
                    </button>
                  </div>
                </>
              )}

              {isSignup && (
                <>
                  <div className='spacing-10'>
                    <button
                               className='mt-4 py-2 px-3 font-serif font-medium text-[18px] text-white bg-tertiaryOne rounded-[10px] outline-none hover:text-white hover:bg-opacity-40 transition ease-in-out duration-150'
                               isLoading={formik.isSubmitting}
                    >
                      Sign up
                    </button>
                  </div>
                  <div className='spacing-10'>
                    <button onClick={() => setIsSignup(false)}>
                      I have an account
                    </button>
                  </div>
                </>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
