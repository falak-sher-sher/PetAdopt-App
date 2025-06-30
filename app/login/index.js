import { useOAuth } from '@clerk/clerk-expo';
import * as AuthSession from 'expo-auth-session';
import { useRouter } from 'expo-router';
import * as WebBrowser from 'expo-web-browser';
import { useCallback, useEffect } from 'react';
import { Image, Text, TouchableOpacity, View, Platform } from 'react-native';

// 🔧 Warm up the browser only on native (not web)
export const useWarmUpBrowser = () => {
  useEffect(() => {
    if (Platform.OS !== 'web') {
      void WebBrowser.warmUpAsync();
      return () => {
        void WebBrowser.coolDownAsync();
      };
    }
  }, []);
};

// 🚀 Allow the browser session to resume on redirect
WebBrowser.maybeCompleteAuthSession();

export default function LoginScreen() {
  useWarmUpBrowser();
  const { startOAuthFlow } = useOAuth({ strategy: 'oauth_google' });
  const router = useRouter();

  const onPress = useCallback(async () => {
    try {
      const redirectUrl = AuthSession.makeRedirectUri({
        scheme: 'petadoptapp', // 🛠 Must match your app.json scheme exactly
        path: 'home',
      });

      console.log('Redirect URI:', redirectUrl); // ✅ Debug log

      const { createdSessionId, setActive } = await startOAuthFlow({
        redirectUrl,
      });

      if (createdSessionId) {
        await setActive({ session: createdSessionId });
        router.replace('/home'); // 📦 Navigate after sign-in
      }
    } catch (err) {
      console.error('Raw error:', err);
      try {
        console.error('Stringified error:', JSON.stringify(err, null, 2));
      } catch (e) {
        console.error('Error could not be stringified:', e);
      }
    }
  }, [router, startOAuthFlow]);

  return (
    <View style={{ backgroundColor: 'white', height: '100%' }}>
      <Image
        source={require('../../assets/images/login.png')}
        style={{ width: '100%', height: 500 }}
      />

      <View style={{ padding: 20, alignItems: 'center' }}>
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
          Let’s adopt a pet you like and make them happy again.
        </Text>
      </View>

      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity
          onPress={onPress}
          style={{
            backgroundColor: '#FEBE00',
            padding: 12,
            borderRadius: 8,
            marginTop: 30,
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
        </TouchableOpacity>
      </View>
    </View>
  );
}
