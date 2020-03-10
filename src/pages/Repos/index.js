import React, { useEffect, useState } from "react";
import {
  Container,
  TitlePage,
  ContentRepos,
  LinkRepos,
  NameRepos,
  StructRepos
} from "./styled";

import api from "../../services/api";

function ReposPage() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    async function loadRepos() {
      const response = await api.get("danieljuniorce/repos");

      setRepos(response.data);
    }

    loadRepos();
  }, []);

  return (
    <Container>
      <TitlePage>
        <i className="fab fa-github" />
        &nbsp;Repositórios no Github
      </TitlePage>

      <StructRepos>
        {repos.map(repo => (
          <ContentRepos key={repo.id}>
            <NameRepos>
              <i className="fab fa-github" />
              &nbsp;{repo.name}
            </NameRepos>
            <LinkRepos href={repo.html_url} target="_blank">
              Ver repositório
            </LinkRepos>
          </ContentRepos>
        ))}
      </StructRepos>
    </Container>
  );
}

export default ReposPage;
