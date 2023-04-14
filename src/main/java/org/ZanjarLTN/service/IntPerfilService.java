package org.ZanjarLTN.service;

import java.util.List;

import org.ZanjarLTN.entity.Perfil;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface IntPerfilService {

	public void guardar (Perfil perfil);
	public List<Perfil> obtenerPerfiles();
	public Perfil buscarPorId(Integer idPerfil);
	public void eliminar(Integer idPerfil);
	public int totalPerfiles();
	Page<Perfil>buscarTodas(Pageable page);
}
