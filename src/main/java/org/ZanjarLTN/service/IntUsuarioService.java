package org.ZanjarLTN.service;

import java.util.List;
import org.ZanjarLTN.entity.Usuario;

public interface IntUsuarioService {

	public void guardar (Usuario usuario);
	public List<Usuario> obtenerUsuario();
	public Usuario buscarPorId(Integer idUsuario);
	public void eliminar(Integer idUsuario);
}
