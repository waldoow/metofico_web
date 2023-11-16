import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { useCookies } from 'react-cookie';
import { Input } from "@/components/ui/input"
import { useNavigate} from 'react-router-dom';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"


const formSchema = z.object({
    username: z.string().email("Invalid email"),
    password: z.string()
});

const Login: React.FC = () => {
    const [, setCookie] = useCookies();
    const navigate = useNavigate();
    const form = useForm<z.infer<typeof formSchema>>({
        mode: 'onChange',
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: '',
            password: ''
        }
    });

    const onSubmit = async (values: z.infer<typeof formSchema>)=> {
        const params = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-From': 'web'
            },
            body: JSON.stringify(values)
        };

        const response = await fetch('/api/login_check', params);
        if (response.ok) {
            const json = await response.json();

            setCookie('_auth', json, { maxAge: json.ttl });
            navigate('/dashboard');
        }
    };

    return (
        <section className={'min-h-screen flex flex-col justify-center lg:max-w-5xl m-auto space-y-16'}>
            <Card className="w-5/6 lg:w-1/2 m-auto">
                <CardHeader>
                    <CardTitle>
                        Sign in to your account
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                            <FormField
                                control={form.control}
                                name="username"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input placeholder="john.doe@mail.com" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Password</FormLabel>
                                        <FormControl>
                                            <Input placeholder="password" {...field} type='password' />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <Button className='mt-12 w-full' type="submit">Submit</Button>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </section>
    )
}

export default Login;
