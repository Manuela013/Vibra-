// ==========================================
// VIBRA V4 - CONEXÃO COM O BANCO
// ==========================================

console.log("Vibra V4 carregado!");

async function testarConexaoVibra() {
    try {
        const { data, error } = await vibraDB
            .from("profiles")
            .select("id")
            .limit(1);

        if (error) {
            console.error("Erro ao conectar ao Supabase:", error);
            return false;
        }

        console.log("✅ Vibra conectado ao banco!");
        return true;

    } catch (erro) {
        console.error("Erro inesperado:", erro);
        return false;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    testarConexaoVibra();
});
