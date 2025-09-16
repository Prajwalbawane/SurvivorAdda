# SurvivorAdda - eSports Tournament App

## Project Overview
A complete React Native Expo app with TypeScript and Expo Router for eSports tournaments, specifically designed for Free Fire gaming competitions.

## Features Implemented

### 1. Authentication Flow
- **Splash Screen** (`app/(auth)/splash.tsx`)
  - Free Fire themed design with orange gradient
  - Sign In and Sign Up navigation buttons
  
- **Sign In Screen** (`app/(auth)/signin.tsx`)
  - Email and password input fields
  - Google sign-in option
  - Navigation to main app after login
  
- **Sign Up Screen** (`app/(auth)/signup.tsx`)
  - Registration form with first name, last name, email, password, mobile
  - Google sign-up option
  - Navigation to main app after registration

### 2. Main App Structure (Bottom Tabs)
- **Home Tab** (`app/(tabs)/index.tsx`)
  - Header with hamburger menu, wallet balance (₹100), notification icon
  - Banner image
  - ESPORTS Matches section with game mode cards
  - Game modes: Free Fire, Free Fire Max, Clash Squad, Lone Wolf
  
- **My Matches Tab** (`app/(tabs)/matches/index.tsx`)
  - List of joined matches with status indicators
  - Match details with entry fee, prize pool, timing
  - Navigation to individual match details
  
- **Profile Tab** (`app/(tabs)/profile/index.tsx`)
  - User profile information
  - Wallet balance display with "Add Money" button
  - User statistics (matches played, won, earnings)
  - Profile options menu (Edit Profile, Transaction History, Refer & Earn, etc.)
  
- **Support Tab** (`app/(tabs)/support.tsx`)
  - Contact options (WhatsApp, Email, Phone)
  - FAQ section
  - App information

### 3. Tournament Flow
- **Leagues Screen** (`app/(tabs)/leagues/index.tsx`)
  - List of available leagues for selected game mode
  - League cards with entry fee, prize pool, slots information
  - "View Full Prize Pool" and "Join Match" buttons
  
- **Prize Pool Screen** (`app/(tabs)/leagues/prizepool.tsx`)
  - Detailed prize distribution breakdown
  - Position-wise prize allocation
  - Entry fee and player limit information
  
- **Game Details Screen** (`app/(tabs)/leagues/details.tsx`)
  - Match joining form with team name input
  - Game rules and requirements
  - Payment integration for entry fee
  - Success navigation to My Matches

### 4. Match Management
- **Match Details Screen** (`app/(tabs)/matches/[id].tsx`)
  - Individual match information
  - Match status and timing
  - Room ID sharing functionality
  - Leave match and join room options

## Technical Implementation

### Navigation Structure
```
app/
├── _layout.tsx (Root layout)
├── index.tsx (Redirects to splash)
├── (auth)/
│   ├── _layout.tsx
│   ├── splash.tsx
│   ├── signin.tsx
│   └── signup.tsx
└── (tabs)/
    ├── _layout.tsx (Bottom tabs)
    ├── index.tsx (Home)
    ├── leagues/
    │   ├── _layout.tsx
    │   ├── index.tsx
    │   ├── details.tsx
    │   └── prizepool.tsx
    ├── matches/
    │   ├── _layout.tsx
    │   ├── index.tsx
    │   └── [id].tsx
    ├── profile/
    │   └── index.tsx
    └── support.tsx
```

### Key Dependencies
- `expo-router` - File-based routing
- `@expo/vector-icons` - Icons
- `expo-linear-gradient` - Gradient backgrounds
- `react-native-safe-area-context` - Safe area handling
- `nativewind` - Tailwind CSS styling

### Styling Approach
- **NativeWind (Tailwind CSS)** for consistent styling
- **Orange/Yellow theme** matching Free Fire branding
- **Responsive design** optimized for iPhone 16 Pro
- **Card-based UI** with shadows and rounded corners
- **Gradient backgrounds** for authentication screens

### Data Flow
- **Dummy data** implemented for leagues, matches, and user information
- **Navigation parameters** passed between screens
- **State management** using React hooks
- **Alert dialogs** for user feedback

## How to Run
1. Install dependencies: `npm install`
2. Start development server: `npx expo start`
3. Scan QR code with Expo Go app or run on simulator

## App Flow
1. **App Launch** → Splash Screen
2. **Authentication** → Sign In/Sign Up → Main App
3. **Home Screen** → Select Game Mode → View Leagues
4. **Join Tournament** → Enter Details → Pay Entry Fee → Match Added to "My Matches"
5. **Match Management** → View Match Details → Join Room when live

## Features Ready for Enhancement
- Real API integration
- Payment gateway integration
- Push notifications
- Real-time match updates
- User authentication with backend
- Wallet management system
- Tournament bracket system
- Live chat functionality

The app provides a complete foundation for an eSports tournament platform with all major user flows implemented and ready for production enhancement.