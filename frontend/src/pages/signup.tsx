import React, { useState } from 'react';
import { Card, CardDescription, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';

const Signup: React.FC = () => {

    const [firstName, setFirstName] = useState('');
    const [firstNameError, setFirstNameError] = useState('');

    const [lastName, setLastName] = useState('');
    const [lastNameError, setLastNameError] = useState('');

    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');

    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const updateFirstName = (val: string) => {

        setFirstName(val);

        if (val === '')
            setFirstNameError('First name is required.');
        else
            setFirstNameError('');
    };

    const updateLastName = (val: string) => {

        setLastName(val);

        if (val === '')
            setLastNameError('Last name is required.');
        else
            setLastNameError('');
    };

    const updateEmail = (val: string) => {

        setEmail(val);

        if (val === '')
            setEmailError('Email is required.');
        else if (!/\S+@\S+\.\S+/.test(val))
            setEmailError('Enter a valid email address.');
        else
            setEmailError('');
    };

    const updatePassword = (val: string) => {

        setPassword(val);

        if (val === '')
            setPasswordError('Password is required.');
        else
            setPasswordError('');
    };


    const signup = (e: React.FormEvent) => {
        
        e.preventDefault();

        if(emailError || passwordError)
            return;

        if(!email)
            setEmailError('Email is required.');
        
        if(!password)
            setPasswordError('Password is required.');

        
    }

    return (
        <div className="flex items-center justify-center min-h-screen">
            <Card className="w-full max-w-md px-6 py-12">
                <CardHeader>
                    <CardTitle className="text-center text-3xl font-bold">
                        Welcome 👋
                    </CardTitle>
                    <CardDescription className="text-center text-base text-muted-foreground">
                        Enter your name, email, and password to signup.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div>
                        <div className="flex space-x-4">
                            <div className="flex-1">
                                <Label htmlFor="firstName" className="block text-base font-medium">
                                    First Name
                                </Label>
                                <Input
                                    id="firstName"
                                    type="text"
                                    value={firstName}
                                    onChange={(e) => updateFirstName(e.target.value)}
                                    placeholder='John'
                                    className="mt-1 block w-full"
                                />
                                <p className="mt-1 text-base text-red-600">
                                    {firstNameError || '\0'}
                                </p>
                            </div>
                            <div className="flex-1">
                                <Label htmlFor="lastName" className="block text-base font-medium">
                                    Last Name
                                </Label>
                                <Input
                                    id="lastName"
                                    type="text"
                                    value={lastName}
                                    onChange={(e) => updateLastName(e.target.value)}
                                    placeholder='Doe'
                                    className="mt-1 block w-full"
                                />
                                <p className="mt-1 text-base text-red-600">
                                    { lastNameError || '\0' }
                                </p>
                            </div>
                        </div>
                        <div className='mt-4'>
                            <Label htmlFor="email" className="block text-base font-medium">
                                Email
                            </Label>
                            <Input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => updateEmail(e.target.value)}
                                placeholder='name@example.com'
                                className="mt-1 block w-full"
                            />
                            <p className="mt-1 text-base text-red-600">
                                { emailError || '\0'}
                            </p>
                        </div>
                        <div className='mt-4'>
                            <Label htmlFor="password" className="block text-base font-medium">
                                Password
                            </Label>
                            <Input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => updatePassword(e.target.value)}
                                placeholder='strongpassword'
                                className="mt-1 block w-full"
                            />
                            <p className="mt-1 text-base text-red-600">
                                { passwordError || '\0'}
                            </p>
                        </div>
                        <Button onClick={signup} className="w-full mt-6">
                            Signup
                        </Button>
                        <div className="text-center text-sm mt-1">
                            <p>
                                Already have an account?{' '}
                                <a href="/login" className="hover:underline">
                                    Log in
                                </a>
                            </p>
                        </div>
                        <div className="flex items-center space-x-4 my-4">
                            <Separator className="flex-1" />
                            <p className="text-center text-sm text-muted-foreground">OR</p>
                            <Separator className="flex-1" />
                        </div>
                        <Button variant="outline" className="w-full">
                            Login with Google
                        </Button>
                    </div>
                </CardContent> 
            </Card>
        </div>
    );
};

export default Signup;