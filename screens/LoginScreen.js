import AuthContent from '../Components/Auth/AuthContent';
import { Alert } from 'react-native';
import { login } from '../util/auth';
import { useState, useContext } from 'react';
import LoadingOverlay from '../Components/ui/LoadingOverlay';
import { AuthContext } from '../store/auth-context';

export default function LoginScreen(){
    const [isAuthenticating, setIsAuthenticating] = useState(false);
    const authCtx = useContext(AuthContext);

    async function loginHandler({ email, password }) {
        console.log('🎯 loginHandler called with:', email, password);
        setIsAuthenticating(true);
        try{
            console.log('⏳ Calling login...');
            const token = await login(email, password);
            console.log('✅ Login success, token:', token);
            authCtx.authenticate(token);
            Alert.alert('Success!', 'Login successful!');
        }catch(error){
            console.log('❌ Login failed:', error.message);
            Alert.alert('Authentication Failed', 'Invalid credentials');
        } finally {
            setIsAuthenticating(false);
        }
    }

    if (isAuthenticating) {
        return <LoadingOverlay message="Logging in..." />;
    }

    return (
        <AuthContent isLogin onAuthenticate={loginHandler} />
    )
}