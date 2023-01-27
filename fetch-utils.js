const SUPABASE_URL = 'https://agyutucvgxjlkhiwcbon.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFneXV0dWN2Z3hqbGtoaXdjYm9uIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQyMzg2NDcsImV4cCI6MTk4OTgxNDY0N30.BzK5Q5-MFu_4cAlsgE56qseE8UABfriLz24WrqUhsPY';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function signUp(email, password) {
    const { data } = await client.auth.signUp({
        email: email,
        password: password,
    });
    return data;
}

export async function signIn(email, password) {
    const response = await client.auth.signIn({
        email: email,
        password: password,
    });
    return response;
}

export async function getUser() {
    return client.auth.session() && client.auth.session().user;
}

export async function checkAuth() {
    const user = await getUser();
    if (!user) location.replace('/auth');
}

export async function signOut() {
    const response = await client.auth.signOut();
    return response.error;
}

export async function getPosts() {
    const { data } = await client.from('posts').select('*');
    return data;
}

export async function createPost(title, description, contact) {
    const { data, error } = await client
        .from('posts')
        .insert([{ title: title, description: description, contact: contact }]);
    return data;
}
