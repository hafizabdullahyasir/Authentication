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
        
        setIsAuthenticating(true);
        try{
            
            const token = await login(email, password);
            
            authCtx.authenticate(token);
            Alert.alert('Success!', 'Login successful!');
        }catch(error){
            
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