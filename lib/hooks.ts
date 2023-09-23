import useSWR from "swr";
import fetcher from "./fetcher";

// Custom hook to fetch user data
export const useMe = () => {
  // Use 'useSWR' to fetch data from the "/me" endpoint using the 'fetcher' function
  const { data, error } = useSWR("/me", fetcher);

  // Return an object containing user data, loading state, and error state
  return {
    user: data, // User data
    isLoading: !data && !error, // Loading state (true if data is not available and there are no errors)
    isError: error, // Error state (true if there is an error)
  };
};

// Custom hook to fetch playlist data
export const usePlaylist = () => {
  // Use 'useSWR' to fetch data from the "/playlist" endpoint using the 'fetcher' function
  const { data, error } = useSWR("/playlist", fetcher);

  // Return an object containing playlist data, loading state, and error state
  return {
    playlists: (data as any) || [], // Playlist data (default to an empty array)
    isLoading: !data && !error, // Loading state (true if data is not available and there are no errors)
    isError: error, // Error state (true if there is an error)
  };
};
