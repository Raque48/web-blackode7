package org.ZanjarLTN.service;

import java.util.List;

import org.ZanjarLTN.entity.Sonido;

public interface IntSonidoService {

	public List<Sonido> obtenerSonidos();
	public void guardar(Sonido sonido);
	public Sonido buscarPorId(int idSonido);
	public void eliminar(int idSonido);
}
