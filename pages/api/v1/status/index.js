function status(request, response) {
  response.status(200).json({ message: "Resposta da API" });
}

export default status;
