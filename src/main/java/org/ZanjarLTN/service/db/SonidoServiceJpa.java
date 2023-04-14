package org.ZanjarLTN.service.db;

import java.util.List;
import java.util.Optional;

import org.ZanjarLTN.entity.Sonido;
import org.ZanjarLTN.repository.SonidoRepository;
import org.ZanjarLTN.service.IntSonidoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;

@Service
@Primary
public class SonidoServiceJpa implements IntSonidoService {

	@Autowired
	private SonidoRepository repoSonido;
	
	@Override
	public List<Sonido> obtenerSonidos() {
		// TODO Auto-generated method stub
		return repoSonido.findAll();
	}

	@Override
	public void guardar(Sonido sonido) {
		// TODO Auto-generated method stub
		repoSonido.save(sonido);
	}

	@Override
	public Sonido buscarPorId(int idSonido) {
		// TODO Auto-generated method stub
		Optional<Sonido> optional = repoSonido.findById(idSonido);
		if(optional.isPresent()) {
			return optional.get();
		}
		return null;
	}

	@Override
	public void eliminar(int idSonido) {
		// TODO Auto-generated method stub
		repoSonido.deleteById(idSonido);
	}

}
