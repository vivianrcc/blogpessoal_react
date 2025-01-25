import axios from 'axios';

const api = axios.create({
  baseURL: 'https://blogpessoal-kkt3.onrender.com',
});

// Função para cadastrar um usuário
export const cadastrarUsuario = async (url: string, dados: Object, setDados: Function) => {
  try {
    const resposta = await api.post(url, dados);
    setDados(resposta.data);
  } catch (error) {
    console.error("Erro ao cadastrar usuário:", error);
    throw new Error("Erro ao cadastrar usuário. Tente novamente.");
  }
};

// Função de login
export const login = async (url: string, dados: Object, setDados: Function) => {
  try {
    const resposta = await api.post(url, dados);
    setDados(resposta.data);
  } catch (error) {
    console.error("Erro ao fazer login:", error);
    throw new Error("Falha na autenticação. Verifique seus dados e tente novamente.");
  }
};

// Função para buscar dados
export const buscar = async (url: string, setDados: Function, header: Object) => {
  try {
    const resposta = await api.get(url, header);
    setDados(resposta.data);
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
    throw new Error("Falha ao buscar dados. Tente novamente.");
  }
};

// Função para cadastrar (com cabeçalhos)
export const cadastrar = async (url: string, dados: Object, setDados: Function, header: Object) => {
  try {
    const resposta = await api.post(url, dados, header);
    setDados(resposta.data);
  } catch (error) {
    console.error("Erro ao cadastrar:", error);
    throw new Error("Falha ao cadastrar. Tente novamente.");
  }
};

// Função para atualizar dados (com cabeçalhos)
export const atualizar = async (url: string, dados: Object, setDados: Function, header: Object) => {
  try {
    const resposta = await api.put(url, dados, header);
    setDados(resposta.data);
  } catch (error) {
    console.error("Erro ao atualizar dados:", error);
    throw new Error("Falha ao atualizar dados. Tente novamente.");
  }
};

// Função para deletar (com cabeçalhos)
export const deletar = async (url: string, header: Object) => {
  try {
    await api.delete(url, header);
  } catch (error) {
    console.error("Erro ao deletar:", error);
    throw new Error("Falha ao deletar. Tente novamente.");
  }
};
