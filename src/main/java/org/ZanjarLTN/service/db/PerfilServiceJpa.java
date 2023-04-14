package org.ZanjarLTN.service.db;

import java.util.List;
import java.util.Optional;

import org.ZanjarLTN.entity.Perfil;
import org.ZanjarLTN.repository.PerfilRepository;
import org.ZanjarLTN.service.IntPerfilService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Primary;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
@Primary
public class PerfilServiceJpa implements IntPerfilService {

	@Autowired
	private PerfilRepository repoPerfil;
	
	@Override
	public void guardar(Perfil perfil) {
		// TODO Auto-generated method stub
		repoPerfil.save(perfil);
	}

	@Override
	public List<Perfil> obtenerPerfiles() {
		// TODO Auto-generated method stub
		return repoPerfil.findAll();
	}

	@Override
	public Perfil buscarPorId(Integer idPerfil) {
		// TODO Auto-generated method stub
		Perfil perfil = null;
		Optional<Perfil> optional = repoPerfil.findById(idPerfil);
		if( optional.isPresent()) {
			perfil = optional.get();
		}
		return perfil;
	}

	@Override
	public void eliminar(Integer idPerfil) {
		// TODO Auto-generated method stub
		repoPerfil.deleteById(idPerfil); 
	}

	@Override
	public int totalPerfiles() {
		// TODO Auto-generated method stub
		return (int) repoPerfil.count();
	}

	@Override
	public Page<Perfil> buscarTodas(Pageable page) {
		// TODO Auto-generated method stub
		return repoPerfil.findAll(page);
	}

}
