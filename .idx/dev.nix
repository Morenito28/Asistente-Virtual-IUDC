## To learn more about how to use Nix to configure your environment
# see: https://developers.google.com/idx/guides/customize-idx-env

{
  # Sets environment variables in the workspace
  env = {};

  idx = {
    # Search for the extensions you want on https://open-vsx.org/ and use "publisher.id"
    extensions = [
      # Ejemplo de extensión: "vscodevim.vim"
    ];

    # Enable previews
    previews = {
      enable = true;
      previews = {
        web = {
          # Ejecuta "npm run dev" con el puerto definido por IDX y muestra el resultado en la vista previa
          command = ["npm" "run" "dev"];
          manager = "web";
          env = {
            # Asigna el puerto definido por IDX
            PORT = "$PORT";
          };
        };
      };
    };

    # Workspace lifecycle hooks
    workspace = {
      # Se ejecuta cuando se crea por primera vez el espacio de trabajo
      onCreate = {
        # Instala dependencias de Node.js al crear el entorno
        npm-install = "npm install";
      };
      # Se ejecuta cada vez que se reinicia el entorno
      onStart = {
        # Puedes agregar tareas de inicio, por ejemplo, iniciar un proceso de desarrollo
        dev-server = "npm run dev";
      };
    };
  };
}
