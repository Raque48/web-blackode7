package org.ZanjarLTN.service.db;

import java.util.List;
import java.util.Optional;

import org.ZanjarLTN.entity.Usuario;
import org.ZanjarLTN.repository.UsuarioRepository;
import org.ZanjarLTN.service.IntUsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;

@Service
@Primary
public class UsuarioServiceJpa implements IntUsuarioService {
	@Autowired
	private UsuarioRepository repoUsuarios;
	
	@Override
	public void guardar(Usuario usuario) {
		// TODO Auto-generated method stub
		repoUsuarios.save(usuario);
	}

	@Override
	public List<Usuario> obtenerUsuario() {
		// TODO Auto-generated method stub
		return repoUsuarios.findAll();
	}

	@Override
	public Usuario buscarPorId(Integer idUsuario) {
		// TODO Auto-generated method stub
		Usuario perfil = null;
		Optional<Usuario> optional = repoUsuarios.findById(idUsuario);
		if( optional.isPresent()) {
			perfil = optional.get();
		}
		return perfil;
	}

	@Override
	public void eliminar(Integer idPerfil) {
		// TODO Auto-generated method stub
		repoUsuarios.deleteById(idPerfil); 
	}

}
