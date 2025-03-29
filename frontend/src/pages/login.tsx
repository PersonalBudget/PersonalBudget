import React, { useState } from 'react';
import { Card, CardDescription, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';

const Login: React.FC = () => {

    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');

    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const updateEmail = (val: string) => {

        setEmail(val);

        if (val === '')
            setEmailError('Email is required.');
        else if (!/\S+@\S+\.\S+/.test(val))
            setEmailError('Enter a valid email address.');
        else
            setEmailError('\0');
    };

    const updatePassword = (val: string) => {

        setPassword(val);

        if (val === '')
            setPasswordError('Password is required.');
        else
            setPasswordError('\0');
    };


    const login = (e: React.FormEvent) => {
        
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
                        Welcome back 👋
                    </CardTitle>
                    <CardDescription className="text-center text-base text-muted-foreground">
                        Enter your email and password to login.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-8">
                        <div>
                            <Label htmlFor="email" className="block text-base font-medium">
                                Email
                            </Label>
                            <Input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => updateEmail(e.target.value)}
                                className="mt-2 block w-full"
                            />
                            { emailError && <p className="mt-2 text-base text-red-600"> { emailError } </p> }
                        </div>
                        <div>
                            <Label htmlFor="password" className="block text-base font-medium">
                                Password
                            </Label>
                            <Input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => updatePassword(e.target.value)}
                                className="mt-2 block w-full"
                            />
                            { passwordError && (<p className="mt-2 text-base text-red-600"> { passwordError } </p>) }
                        </div>
                        <Button onClick={login} className="w-full">
                            Login
                        </Button>
                        <div className="text-center text-sm">
                            <p>
                                Don&apos;t have an account? {' '}
                                <a href="/signup" className="hover:underline">
                                    Signup
                                </a>
                            </p>
                        </div>
                        <div className="flex items-center space-x-4">
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

export default Login;