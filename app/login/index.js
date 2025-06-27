import { useAuth } from '@clerk/clerk-expo';
import * as AuthSession from 'expo-auth-session';
import * as WebBrowser from 'expo-web-browser';
import { useCallback, useEffect } from 'react';
import { Image, Pressable, Text, View, Alert } from 'react-native';
import { useRouter } from 'expo-router';

WebBrowser.maybeCompleteAuthSession();

export const useWarmUpBrowser = () => {
  useEffect(() => {
    void WebBrowser.warmUpAsync();
    return () => void WebBrowser.coolDownAsync();
  }, []);
};

export default function LoginScreen() {
  useWarmUpBrowser();
  const router = useRouter();
  // const { startOAuthFlow } = useAuth({ strategy: 'oauth_google' });

  const onPress = useCallback(() => {
    // If you want to go to /home without authentication:
    router.push('/home');
    // If you want to use Google OAuth, uncomment below:
    /*
    try {
      const redirectUrl = AuthSession.makeRedirectUri({ path: '/home' });
      console.log('OAuth redirectUrl:', redirectUrl);
      const { createdSessionId, setActive } = await startOAuthFlow({
        redirectUrl,
      });
      if (createdSessionId) {
        await setActive({ session: createdSessionId });
      }
    } catch (err) {
      console.error('OAuth Error:', err, JSON.stringify(err, null, 2));
      Alert.alert('Authentication Error', err?.message || 'Unknown error');
    }
    */
  }, [router]);

  return (
    <View style={{ backgroundColor: 'white', height: '100%' }}>
      <Image
        source={require('../../assets/images/login.png')}
        style={{ width: '100%', height: 500 }}
      />
      <View style={{ padding: 20, display: 'flex', alignItems: 'center' }}>
        <Text
          style={{
            fontFamily: 'outfit-bold',
            fontSize: 30,
            textAlign: 'center',
            color: '#000',
          }}
        >
          Ready to make a new friend?
        </Text>
        <Text
          style={{
            fontFamily: 'outfit-regular',
            fontSize: 16,
            textAlign: 'center',
            color: '#A9A9A9',
            marginTop: 10,
          }}
        >
          Let’s adopt a pet you like and make them happy again
        </Text>
        
      </View>
      <View
        
       style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 0.5,
        }}
        >
        <Pressable
          onPress={onPress}
          style={{
            backgroundColor: '#FEBE00',
            padding: 12,
            borderRadius: 8,
            marginTop: 30,
            justifyContent: 'center',
            display: 'flex',
            width: '80%',
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
          }}
        >
          <Text
            style={{
              fontFamily: 'outfit-bold',
              fontSize: 18,
              textAlign: 'center',
              color: '#FFFFFF',
              padding: 10,
            }}
          >
            Get started
          </Text>
        </Pressable>
        </View>
    </View>
  );
}